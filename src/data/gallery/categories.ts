import type { GalleryCategoryId } from "./types";

export interface GalleryCategory {
  id: GalleryCategoryId;
  label: string;
}

export const galleryCategories: GalleryCategory[] = [
  { id: "ecommerce", label: "E-commerce" },
  { id: "business-web", label: "Business websites" },
  { id: "mobile-apps", label: "Mobile apps" },
  { id: "dashboards", label: "Dashboards & admin" },
  { id: "saas", label: "SaaS products" },
  { id: "apis-backends", label: "APIs & backends" },
  { id: "ai-automation", label: "AI & automation" },
  { id: "redesigns", label: "Redesigns" },
  { id: "landing-pages", label: "Landing pages" },
  { id: "internal-tools", label: "Internal tools" },
];

export const galleryCategoryIds = galleryCategories.map((c) => c.id);

export function getCategoryLabel(id: GalleryCategoryId): string {
  return galleryCategories.find((c) => c.id === id)?.label ?? id;
}