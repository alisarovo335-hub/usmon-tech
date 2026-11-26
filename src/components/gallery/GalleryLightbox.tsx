import { useCallback, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { getCategoryLabel, kindBadgeLabel, type GalleryItem } from "@/data/gallery";
import { restoreFocusToTrigger } from "./restoreFocusToTrigger";

export function GalleryLightbox({
  item,
  returnFocusEl,
  onClose,
}: {
  item: GalleryItem | null;
  returnFocusEl?: HTMLElement | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const handleClose = useCallback(() => {
    restoreFocusToTrigger(returnFocusRef.current);
    returnFocusRef.current = null;
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!item) return undefined;

    returnFocusRef.current = returnFocusEl ?? null;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") handleClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [item, returnFocusEl, handleClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-lightbox-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl">
        <button
          ref={closeRef}
          type="button"
          className="absolute right-3 top-3 z-10 rounded-lg border border-neutral-700 bg-neutral-900 p-2 text-neutral-200 transition-colors hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          onClick={handleClose}
          aria-label="Close preview"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-900">
          <img
            src={item.image}
            alt={item.imageAlt}
            width={1600}
            height={1000}
            decoding="async"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="border-t border-neutral-800 p-5 sm:p-6">
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
            <span className="text-brand">{kindBadgeLabel(item.kind)}</span>
            <span aria-hidden>·</span>
            <span>{getCategoryLabel(item.categoryId)}</span>
          </div>
          <h3 id="gallery-lightbox-title" className="mt-2 font-display text-xl font-semibold text-neutral-100">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.description}</p>
        </div>
      </div>
    </div>
  );
}