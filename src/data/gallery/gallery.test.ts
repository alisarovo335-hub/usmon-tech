import { describe, expect, it } from "vitest";
import { kindBadgeLabel } from "./badges";
import {
  filterGalleryByCategory,
  getPublishedDemoConceptItems,
  getPublishedGalleryItems,
  paginateGalleryItems,
} from "./index";
import { GALLERY_CONCEPT_COUNT, galleryConceptEntries } from "./conceptEntries";
import { galleryManifest } from "./manifest";
import { GALLERY_MAX_ITEMS } from "./types";

describe("gallery manifest", () => {
  it("has exactly 100 slots", () => {
    expect(galleryManifest).toHaveLength(GALLERY_MAX_ITEMS);
  });

  it("keeps unpublished slots for concepts and empty reserves", () => {
    const unpublished = galleryManifest.filter((i) => !i.published);
    expect(unpublished).toHaveLength(88);
    const emptyReserved = unpublished.filter((i) => i.title.trim() === "" && i.image.trim() === "");
    expect(emptyReserved).toHaveLength(78);
  });

  it("registers twenty demo concept entries with portfolio metadata", () => {
    expect(GALLERY_CONCEPT_COUNT).toBe(20);
    expect(galleryConceptEntries).toHaveLength(20);
    for (const entry of galleryConceptEntries) {
      expect(entry.kind).toBe("concept");
      expect(entry.title.length).toBeGreaterThan(0);
      expect(entry.description).toMatch(/Demo Concept/i);
    }
    const awaitingAssets = galleryConceptEntries.filter((e) => !e.published);
    expect(awaitingAssets).toHaveLength(10);
    for (const entry of awaitingAssets) {
      expect(entry.image).toBe("");
    }
  });

  it("publishes ARZON, NEWVID, and showcase concepts with assets", () => {
    const published = getPublishedGalleryItems();
    expect(published).toHaveLength(12);
    expect(published.map((p) => p.id).sort()).toEqual([
      "gallery-arzon-bozor",
      "gallery-concept-cosmetics-beauty",
      "gallery-concept-furniture-store",
      "gallery-concept-home-appliances",
      "gallery-concept-jewelry-store",
      "gallery-concept-laptop-ecommerce",
      "gallery-concept-mens-fashion",
      "gallery-concept-perfume-store",
      "gallery-concept-smartphone-ecommerce",
      "gallery-concept-sports-fitness",
      "gallery-concept-womens-fashion",
      "gallery-newvid",
    ]);
  });
});

describe("demo concepts section", () => {
  it("exposes ten published demo concepts for the portfolio grid", () => {
    const concepts = getPublishedDemoConceptItems();
    expect(concepts).toHaveLength(10);
    expect(concepts.every((c) => c.kind === "concept")).toBe(true);
    expect(concepts.map((c) => c.id)).toEqual([
      "gallery-concept-smartphone-ecommerce",
      "gallery-concept-mens-fashion",
      "gallery-concept-laptop-ecommerce",
      "gallery-concept-perfume-store",
      "gallery-concept-cosmetics-beauty",
      "gallery-concept-jewelry-store",
      "gallery-concept-furniture-store",
      "gallery-concept-home-appliances",
      "gallery-concept-womens-fashion",
      "gallery-concept-sports-fitness",
    ]);
  });
});

describe("gallery filters", () => {
  it("filters by category", () => {
    const items = getPublishedGalleryItems();
    const ecommerce = filterGalleryByCategory(items, "ecommerce");
    expect(ecommerce).toHaveLength(11);
    expect(ecommerce.map((p) => p.id).sort()).toEqual([
      "gallery-arzon-bozor",
      "gallery-concept-cosmetics-beauty",
      "gallery-concept-furniture-store",
      "gallery-concept-home-appliances",
      "gallery-concept-jewelry-store",
      "gallery-concept-laptop-ecommerce",
      "gallery-concept-mens-fashion",
      "gallery-concept-perfume-store",
      "gallery-concept-smartphone-ecommerce",
      "gallery-concept-sports-fitness",
      "gallery-concept-womens-fashion",
    ]);
  });

  it("paginates with page size", () => {
    const items = getPublishedGalleryItems();
    expect(paginateGalleryItems(items, 24)).toHaveLength(12);
  });
});

describe("kindBadgeLabel", () => {
  it("labels concepts as Demo Concept", () => {
    expect(kindBadgeLabel("concept")).toBe("Demo Concept");
  });
});