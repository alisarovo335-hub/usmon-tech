import type { GalleryCategoryId, GalleryItem } from "./types";
import { GALLERY_MAX_ITEMS, GALLERY_PAGE_SIZE } from "./types";
import { galleryManifest } from "./manifest";

export { galleryCategories, getCategoryLabel } from "./categories";
export { galleryManifest } from "./manifest";
export { galleryConceptEntries, GALLERY_CONCEPT_COUNT } from "./conceptEntries";
export { kindBadgeLabel } from "./badges";
export { GALLERY_MAX_ITEMS, GALLERY_PAGE_SIZE };
export type { GalleryCategoryId, GalleryItem, GalleryItemKind } from "./types";

export function getPublishedGalleryItems(): GalleryItem[] {
  return galleryManifest.filter(
    (item) => item.published && item.title.trim().length > 0 && item.image.trim().length > 0,
  );
}

/** Published in-house UI explorations only (excludes ARZON / NEWVID gallery tiles). */
export function getPublishedDemoConceptItems(): GalleryItem[] {
  return getPublishedGalleryItems().filter((item) => item.kind === "concept");
}

export function filterGalleryByCategory(
  items: GalleryItem[],
  categoryId: GalleryCategoryId | "all",
): GalleryItem[] {
  if (categoryId === "all") return items;
  return items.filter((item) => item.categoryId === categoryId);
}

export function paginateGalleryItems(items: GalleryItem[], limit: number): GalleryItem[] {
  return items.slice(0, limit);
}

export function caseStudyAnchorId(featuredId: NonNullable<GalleryItem["featuredCaseStudyId"]>): string {
  return `case-study-${featuredId}`;
}