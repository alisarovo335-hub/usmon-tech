export function GalleryLoadMore({
  visibleCount,
  totalCount,
  onLoadMore,
}: {
  visibleCount: number;
  totalCount: number;
  onLoadMore: () => void;
}) {
  if (visibleCount >= totalCount) return null;

  return (
    <div className="mt-10 flex flex-col items-center gap-3">
      <p className="text-sm text-neutral-500">
        Showing {visibleCount} of {totalCount} published items
      </p>
      <button type="button" className="btn-secondary min-h-11 px-8" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
}