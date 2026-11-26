export type GalleryCategoryId =
  | "ecommerce"
  | "business-web"
  | "mobile-apps"
  | "dashboards"
  | "saas"
  | "apis-backends"
  | "ai-automation"
  | "redesigns"
  | "landing-pages"
  | "internal-tools";

export type GalleryItemKind = "case-study" | "live-demo" | "concept" | "template" | "ui-study";

export type FeaturedCaseStudyId = "arzon-bozor" | "newvid";

export interface GalleryItem {
  id: string;
  categoryId: GalleryCategoryId;
  title: string;
  description: string;
  kind: GalleryItemKind;
  image: string;
  imageAlt: string;
  featuredCaseStudyId?: FeaturedCaseStudyId;
  href?: string;
  published: boolean;
}

export const GALLERY_PAGE_SIZE = 24;
export const GALLERY_MAX_ITEMS = 100;