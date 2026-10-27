// Prerenders the built SPA in dist/ into static HTML, one file per route.
//
// Runs after `vite build`. Serves dist/ on a local port, loads every route in headless
// Chromium (@sparticuz/chromium + puppeteer-core, so no browser install step is needed on
// Cloudflare Pages), and writes the rendered DOM back to dist/:
//
//   /                      -> dist/index.html
//   /about                 -> dist/about.html
//   /services/irrigation   -> dist/services/irrigation.html
//   (unknown route)        -> dist/404.html   (Cloudflare Pages serves this with a 404 status)
//
// Routes are seeded from public/sitemap.xml and expanded by following every internal link
// found on rendered pages. The build fails if any page throws, renders the 404 page when it
// shouldn't (e.g. a broken nav link), has no <h1>, is nearly empty, or shares a title with
// another page.

import { createServer } from "node:http";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { join, extname, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const NOT_FOUND_PROBE = "/__prerender-404-probe__";
const NOT_FOUND_TEXT = "Page not found";
const MIN_TEXT_LENGTH = 200;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const fail = (msg) => {
  console.error(`\n[prerender] FAILED: ${msg}`);
  process.exit(1);
};

const normalize = (path) => {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, "");
  return clean === "" ? "/" : clean;
};

const outputFile = (route) => {
  if (route === NOT_FOUND_PROBE) return join(DIST, "404.html");
  if (route === "/") return join(DIST, "index.html");
  return join(DIST, `${route.slice(1)}.html`);
};

// The untouched SPA shell. Every route is rendered from this, never from an earlier snapshot.
const template = await readFile(join(DIST, "index.html"), "utf8").catch(() =>
  fail("dist/index.html not found. Run `vite build` first."),
);

const server = createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  if (extname(path)) {
    const file = join(DIST, path);
    if (file.startsWith(DIST)) {
      try {
        if ((await stat(file)).isFile()) {
          res.writeHead(200, { "Content-Type": MIME[extname(file)] ?? "application/octet-stream" });
          res.end(await readFile(file));
          return;
        }
      } catch {
        // fall through to 404
      }
    }
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { "Content-Type": MIME[".html"] }).end(template);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const origin = `http://127.0.0.1:${server.address().port}`;

const sitemap = await readFile(join(ROOT, "public", "sitemap.xml"), "utf8");
const seedRoutes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => normalize(new URL(m[1]).pathname));
if (!seedRoutes.includes("/")) seedRoutes.unshift("/");

const browser = await puppeteer.launch({
  args: await puppeteer.defaultArgs({ args: chromium.args, headless: "shell" }),
  defaultViewport: { width: 1280, height: 900 },
  executablePath: await chromium.executablePath(),
  headless: "shell",
});

const render = async (route) => {
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));
  await page.setRequestInterception(true);
  // Only load the site itself; third-party embeds (YouTube, fonts) don't affect the markup.
  page.on("request", (r) => (r.url().startsWith(origin) || r.url().startsWith("data:") ? r.continue() : r.abort()));

  // Flag the build-time snapshot so the hero background video (loaded after
  // page load on real visits) isn't baked into the static HTML.
  await page.evaluateOnNewDocument(() => {
    window.__PRERENDER__ = true;
  });
  await page.goto(origin + route, { waitUntil: "networkidle0", timeout: 30_000 });
  await page.waitForFunction(() => document.querySelector("#root")?.children.length > 0, { timeout: 10_000 });

  const result = await page.evaluate((origin) => {
    const links = [...document.querySelectorAll("a[href]")]
      .map((a) => a.href)
      .filter((href) => href.startsWith(origin))
      .map((href) => new URL(href).pathname);
    return {
      title: document.title,
      h1: document.querySelector("h1")?.textContent.trim().replace(/\s+/g, " ") ?? "",
      text: document.querySelector("#root").innerText,
      robots: document.querySelector('meta[name="robots"]')?.content ?? "",
      links,
      html: "<!doctype html>\n" + document.documentElement.outerHTML,
    };
  }, origin);
  await page.close();
  return { ...result, errors };
};

const results = new Map();
const linkedFrom = new Map();
const queue = [...seedRoutes];

try {
  while (queue.length) {
    const route = queue.shift();
    if (results.has(route)) continue;
    const result = await render(route);
    results.set(route, result);
    for (const link of result.links.map(normalize)) {
      if (!linkedFrom.has(link)) linkedFrom.set(link, route);
      if (!results.has(link) && !queue.includes(link)) queue.push(link);
    }
  }
  results.set(NOT_FOUND_PROBE, await render(NOT_FOUND_PROBE));
} finally {
  await browser.close();
  server.close();
}

// Verify every page before writing anything.
const problems = [];
const titles = new Map();
for (const [route, r] of results) {
  const is404 = route === NOT_FOUND_PROBE;
  const label = is404 ? "404 page" : route;
  if (r.errors.length) problems.push(`${label}: JavaScript error: ${r.errors.join("; ")}`);
  if (!r.title) problems.push(`${label}: empty <title>`);
  if (!r.h1) problems.push(`${label}: no <h1>`);
  if (is404) {
    if (!r.text.includes(NOT_FOUND_TEXT)) problems.push(`404 page: missing "${NOT_FOUND_TEXT}" text`);
    if (!r.robots.includes("noindex")) problems.push("404 page: missing robots noindex");
    continue;
  }
  if (r.text.includes(NOT_FOUND_TEXT)) {
    const from = linkedFrom.get(route);
    problems.push(`${route}: renders the 404 page${from ? ` (linked from ${from})` : ""}`);
  }
  if (r.text.length < MIN_TEXT_LENGTH) problems.push(`${route}: only ${r.text.length} characters of text`);
  if (titles.has(r.title)) problems.push(`${route}: same title as ${titles.get(r.title)} ("${r.title}")`);
  titles.set(r.title, route);
}
for (const route of seedRoutes) {
  if (!results.has(route)) problems.push(`${route}: listed in sitemap.xml but not rendered`);
}
if (problems.length) fail(`\n  - ${problems.join("\n  - ")}`);

for (const [route, r] of results) {
  const file = outputFile(route);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, r.html);
}

console.log(`\n[prerender] Wrote ${results.size} pages:`);
for (const [route, r] of results) {
  const file = outputFile(route).slice(DIST.length + 1);
  console.log(`  ${(route === NOT_FOUND_PROBE ? "(404)" : route).padEnd(30)} -> ${file.padEnd(32)} ${r.text.length
    .toString()
    .padStart(6)} chars  "${r.title}"`);
  console.log(`  ${"".padEnd(30)}    h1: ${r.h1.slice(0, 90)}`);
}
