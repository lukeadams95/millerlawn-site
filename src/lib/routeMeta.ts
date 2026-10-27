export const SITE_URL = "https://www.millerlawnlandscapekc.com";

export type RouteMeta = {
  title: string;
  description: string;
};

const BRAND = "Millerlawn & Landscape LLC";

// Keyed by pathname. Keep in sync with the routes in App.tsx and public/sitemap.xml;
// scripts/prerender.mjs prerenders every path listed here.
export const routeMeta: Record<string, RouteMeta> = {
  "/": {
    title: `${BRAND} | Kansas City Lawn Care & Landscaping`,
    description:
      "Professional lawn care and landscaping services in Kansas City. Owned by a retired firefighter. Commercial contracts and residential care. Call (816) 510-5317.",
  },
  "/about": {
    title: `About Us | ${BRAND}`,
    description:
      "Meet Millerlawn & Landscape LLC, a Kansas City lawn care and landscaping company founded by a retired firefighter and built on service, honesty, and dedication.",
  },
  "/services": {
    title: `Lawn Care & Landscaping Services in Kansas City | ${BRAND}`,
    description:
      "Lawn mowing, irrigation, landscaping, gutter services, and Christmas light installation for homes and businesses across the Kansas City metro.",
  },
  "/services/lawn-mowing": {
    title: `Lawn Mowing & Lawn Care in Kansas City | ${BRAND}`,
    description:
      "Reliable, scheduled lawn mowing with edging and cleanup included for residential and commercial properties in Kansas City.",
  },
  "/services/irrigation": {
    title: `Irrigation System Installation & Repair in Kansas City | ${BRAND}`,
    description:
      "Sprinkler and irrigation system installation, repair, startup, and winterization in Kansas City, designed for water efficiency.",
  },
  "/services/landscaping": {
    title: `Landscaping Design & Installation in Kansas City | ${BRAND}`,
    description:
      "Custom landscape design and installation in Kansas City: plantings, mulch, flower beds, and curb appeal upgrades for homes and businesses.",
  },
  "/services/gutter-services": {
    title: `Gutter Cleaning & Gutter Guards in Kansas City | ${BRAND}`,
    description:
      "Professional gutter cleaning and gutter guard installation in Kansas City to protect your home or business from water damage.",
  },
  "/services/christmas-lights": {
    title: `Christmas Light Installation in Kansas City | ${BRAND}`,
    description:
      "Custom Christmas light design, installation, maintenance, and take-down for Kansas City homes and businesses. No ladders, no stress.",
  },
  "/faq": {
    title: `Frequently Asked Questions | ${BRAND}`,
    description:
      "Answers to common questions about Millerlawn & Landscape LLC's lawn care, landscaping, irrigation, gutter, and seasonal services in Kansas City.",
  },
  "/contact": {
    title: `Contact Us for a Free Quote | ${BRAND}`,
    description:
      "Call or text (816) 510-5317 for a free quote on lawn care, landscaping, irrigation, gutters, or Christmas lights in the Kansas City metro.",
  },
  "/reviews": {
    title: `Client Reviews | ${BRAND}`,
    description:
      "Read what Kansas City homeowners and businesses say about Millerlawn & Landscape LLC's lawn care, landscaping, and holiday lighting.",
  },
  "/privacy": {
    title: `Privacy Policy | ${BRAND}`,
    description: "Privacy policy for Millerlawn & Landscape LLC.",
  },
  "/terms": {
    title: `Terms of Service | ${BRAND}`,
    description: "Terms of service for Millerlawn & Landscape LLC.",
  },
};

export const notFoundMeta: RouteMeta = {
  title: `Page Not Found | ${BRAND}`,
  description: "The page you're looking for doesn't exist.",
};
