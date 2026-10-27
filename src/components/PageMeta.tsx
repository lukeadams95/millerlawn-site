import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { notFoundMeta, routeMeta, SITE_URL } from "@/lib/routeMeta";

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href: string | null) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

// Sets the document title and SEO meta tags for the current route.
const PageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const meta = routeMeta[path];
    const { title, description } = meta ?? notFoundMeta;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "robots", meta ? "index, follow" : "noindex");

    const url = meta ? `${SITE_URL}${path === "/" ? "/" : path}` : null;
    setCanonical(url);
    if (url) setMeta("property", "og:url", url);
  }, [pathname]);

  return null;
};

export default PageMeta;
