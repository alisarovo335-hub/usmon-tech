import { ExternalLink } from "lucide-react";
import { caseStudyAnchorId, getCategoryLabel, kindBadgeLabel, type GalleryItem } from "@/data/gallery";

export function GalleryCard({
  item,
  onOpenLightbox,
}: {
  item: GalleryItem;
  onOpenLightbox: (item: GalleryItem, trigger: HTMLElement) => void;
}) {
  const badge = kindBadgeLabel(item.kind);
  const category = getCategoryLabel(item.categoryId);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 transition-colors duration-300 hover:border-neutral-600 hover:bg-neutral-900/70">
      <button
        type="button"
        className="relative block w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        onClick={(event) => onOpenLightbox(item, event.currentTarget)}
        aria-label={`View larger preview: ${item.title}`}
      >
        <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-950">
          <img
            src={item.image}
            alt={item.imageAlt}
            width={1600}
            height={1000}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </button>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ${
              item.kind === "concept"
                ? "bg-violet-500/15 text-violet-200 ring-violet-500/30"
                : item.kind === "live-demo"
                  ? "bg-brand/15 text-brand ring-brand/30"
                  : "bg-neutral-800 text-neutral-300 ring-neutral-700"
            }`}
          >
            {badge}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">{category}</span>
        </div>

        <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-neutral-100">{item.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-400">{item.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.featuredCaseStudyId ? (
            <a
              href={`#${caseStudyAnchorId(item.featuredCaseStudyId)}`}
              className="text-xs font-medium text-brand hover:underline"
            >
              Read full case study
            </a>
          ) : null}
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-neutral-300 hover:text-white"
            >
              Open demo
              <ExternalLink className="h-3 w-3" aria-hidden />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}