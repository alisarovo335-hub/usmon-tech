import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  filterGalleryByCategory,
  galleryCategories,
  GALLERY_PAGE_SIZE,
  getPublishedDemoConceptItems,
  paginateGalleryItems,
} from "@/data/gallery";
import type { GalleryItem } from "@/data/gallery";
import { GalleryCard } from "./GalleryCard";
import { GalleryFilters, type GalleryFilterValue } from "./GalleryFilters";
import { GalleryLightbox } from "./GalleryLightbox";
import { GalleryLoadMore } from "./GalleryLoadMore";

export function PortfolioGallery() {
  const published = useMemo(() => getPublishedDemoConceptItems(), []);
  const [category, setCategory] = useState<GalleryFilterValue>("all");
  const [visibleLimit, setVisibleLimit] = useState(GALLERY_PAGE_SIZE);
  const [lightbox, setLightbox] = useState<{ item: GalleryItem; returnFocus: HTMLElement } | null>(null);

  const filtered = useMemo(
    () => filterGalleryByCategory(published, category),
    [published, category],
  );

  const visible = useMemo(
    () => paginateGalleryItems(filtered, visibleLimit),
    [filtered, visibleLimit],
  );

  const counts = useMemo((): Record<GalleryFilterValue, number> => {
    const base = {} as Record<GalleryFilterValue, number>;
    base.all = published.length;
    for (const c of galleryCategories) {
      base[c.id] = 0;
    }
    for (const item of published) {
      base[item.categoryId] += 1;
    }
    return base;
  }, [published]);

  function onFilterChange(next: GalleryFilterValue) {
    setCategory(next);
    setVisibleLimit(GALLERY_PAGE_SIZE);
  }

  return (
    <motion.div
      id="demo-concepts"
      aria-labelledby="demo-concepts-heading"
      className="mt-24 border-t border-neutral-800/80 pt-20 sm:mt-32 sm:pt-24"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <p className="text-sm font-medium uppercase tracking-widest text-violet-300/90">In-house work</p>
      <h3 id="demo-concepts-heading" className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Demo Concepts
      </h3>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-400 sm:text-base">
        Ten e-commerce UI explorations built to show layout, product cards, and storefront patterns. Each tile is a{" "}
        <span className="font-medium text-violet-200">Demo Concept</span>—not a client delivery. Click a preview to open
        the lightbox.
      </p>

      <div className="mt-8">
        <GalleryFilters active={category} onChange={onFilterChange} counts={counts} />
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Showing {visible.length} of {filtered.length} items
        {category !== "all" ? ` in ${category}` : ""}.
      </p>

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 px-5 py-8 text-center text-sm text-neutral-400">
          No published items in this category yet. More visuals will appear here as they are added to the showcase.
        </p>
      ) : (
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((item) => (
            <li key={item.id}>
              <GalleryCard
                item={item}
                onOpenLightbox={(galleryItem, trigger) => setLightbox({ item: galleryItem, returnFocus: trigger })}
              />
            </li>
          ))}
        </ul>
      )}

      <GalleryLoadMore
        visibleCount={visible.length}
        totalCount={filtered.length}
        onLoadMore={() => setVisibleLimit((n) => n + GALLERY_PAGE_SIZE)}
      />

      <GalleryLightbox
        item={lightbox?.item ?? null}
        returnFocusEl={lightbox?.returnFocus ?? null}
        onClose={() => setLightbox(null)}
      />
    </motion.div>
  );
}