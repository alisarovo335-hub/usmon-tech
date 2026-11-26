import { galleryCategoryIds } from "./categories";
import { galleryConceptEntries } from "./conceptEntries";
import type { GalleryItem } from "./types";
import { GALLERY_MAX_ITEMS } from "./types";

const publishedGalleryItems: GalleryItem[] = [
  {
    id: "gallery-arzon-bozor",
    categoryId: "ecommerce",
    title: "ARZON BOZOR",
    description:
      "Marketplace storefront UI — public catalog demo on Surge. Part of the wider marketplace codebase (see case study above).",
    kind: "live-demo",
    image: "/projects/arzon-bozor-cover.jpg",
    imageAlt: "Screenshot of the ARZON BOZOR marketplace storefront",
    featuredCaseStudyId: "arzon-bozor",
    href: "https://arzon-bozor.surge.sh/products.html",
    published: true,
  },
  {
    id: "gallery-newvid",
    categoryId: "saas",
    title: "NEWVID",
    description:
      "Video platform product in progress — branding and interface preview from the repository. No public demo yet.",
    kind: "case-study",
    image: "/projects/newvid-cover.png",
    imageAlt: "In-progress NEWVID product branding and interface preview",
    featuredCaseStudyId: "newvid",
    published: true,
  },
];

function buildReservedSlots(count: number): GalleryItem[] {
  const slots: GalleryItem[] = [];
  for (let i = 0; i < count; i++) {
    const categoryId = galleryCategoryIds[i % galleryCategoryIds.length];
    slots.push({
      id: `gallery-reserved-${String(i + 1).padStart(3, "0")}`,
      categoryId,
      title: "",
      description: "",
      kind: "concept",
      image: "",
      imageAlt: "",
      published: false,
    });
  }
  return slots;
}

const reservedCount =
  GALLERY_MAX_ITEMS - publishedGalleryItems.length - galleryConceptEntries.length;

export const galleryManifest: GalleryItem[] = [
  ...publishedGalleryItems,
  ...galleryConceptEntries,
  ...buildReservedSlots(reservedCount),
];