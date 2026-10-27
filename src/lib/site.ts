// Shared contact details, links and icon paths used across the site.

export const PHONE_DISPLAY = "(816) 510-5317";
export const PHONE_TEL = "tel:8165105317";
export const PHONE_SMS = "sms:8165105317";
export const REVIEW_URL = "https://g.page/r/CSE0eVBN-kP1EBM/review";

// 24x24 line-icon paths (stroke only)
export const ICONS = {
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  message: "M4 5h16v11H9l-5 4z",
  chevronDown: "M6 9l6 6 6-6",
  mower: "M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12",
  drop: "M12 3C9 7 6 10 6 14a6 6 0 0 0 12 0c0-4-3-7-6-11z",
  tree: "M12 3l5 7h-3l4 6H6l4-6H7l5-7zM12 16v5",
  house: "M3 11l9-8 9 8M5 10v11h14V10M10 21v-6h4v6",
  bulb: "M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10z",
  wind: "M3 8h10a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7",
  sparkle: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z",
} as const;

// menuLabel overrides the name in the desktop Services dropdown only
export type ServiceLink = { name: string; path: string; icon: string; menuLabel?: string };

// Order used by the Services dropdown, mobile menu and footer
export const SERVICE_LINKS: ServiceLink[] = [
  { name: "Lawn Mowing", path: "/services/lawn-mowing", icon: ICONS.mower },
  { name: "Irrigation Systems", path: "/services/irrigation", icon: ICONS.drop },
  { name: "Landscaping", path: "/services/landscaping", icon: ICONS.tree, menuLabel: "Landscapes" },
  { name: "Gutter Services", path: "/services/gutter-services", icon: ICONS.house },
  { name: "Christmas Lights", path: "/services/christmas-lights", icon: ICONS.bulb },
];

export const isServicePath = (pathname: string) => pathname.startsWith("/services");
