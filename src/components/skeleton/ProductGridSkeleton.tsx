import { ProductCardSkeleton } from "./ProductCardSkeleton";

const SKELETON_COUNT = 12;

export function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
