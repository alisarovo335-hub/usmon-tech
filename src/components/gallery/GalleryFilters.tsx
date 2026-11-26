import { galleryCategories, type GalleryCategoryId } from "@/data/gallery";

export type GalleryFilterValue = GalleryCategoryId | "all";

export function GalleryFilters({
  active,
  onChange,
  counts,
}: {
  active: GalleryFilterValue;
  onChange: (value: GalleryFilterValue) => void;
  counts: Record<GalleryFilterValue, number>;
}) {
  const options: { id: GalleryFilterValue; label: string }[] = [
    { id: "all", label: "All" },
    ...galleryCategories.map((c) => ({ id: c.id, label: c.label })),
  ];

  return (
    <div
      className="sticky top-16 z-10 -mx-1 border-b border-neutral-800/80 bg-neutral-950/90 py-3 backdrop-blur-md sm:static sm:border-0 sm:bg-transparent sm:py-0 sm:backdrop-blur-none"
      role="toolbar"
      aria-label="Filter gallery by category"
    >
      <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
        {options.map((opt) => {
          const selected = active === opt.id;
          const count = counts[opt.id] ?? 0;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              aria-pressed={selected}
              className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:text-sm ${
                selected
                  ? "bg-brand text-neutral-950"
                  : "border border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-neutral-500 hover:text-white"
              }`}
            >
              {opt.label}
              <span className="ml-1.5 opacity-70">({count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}