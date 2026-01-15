import type { ProductWithSoldOut } from "@/types/product";
import { ProductImage } from "./ProductImage";
import { SoldOutBadge } from "./SoldOutBadge";
import { StockStatus } from "../common/StockStatus";

interface ProductCardProps {
  product: ProductWithSoldOut;
}

export function ProductCard({ product }: ProductCardProps) {
  const { name, price, current, limit, image, isSoldOut } = product;

  return (
    <article
      className={`relative bg-white dark:bg-gray-800 rounded-lg border p-3 sm:p-4 transition-all duration-200 ${
        isSoldOut
          ? "border-gray-200 dark:border-gray-700 opacity-60"
          : "border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600"
      }`}
    >
      <div className="relative">
        <ProductImage name={name} image={image} />
        {isSoldOut && (
          <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 z-10">
            <SoldOutBadge />
          </div>
        )}
      </div>

      <div className="mt-2 sm:mt-3">
        <h3
          className={`font-medium text-xs sm:text-sm line-clamp-2 mb-1 min-h-[2.5rem] sm:min-h-10 ${
            isSoldOut
              ? "text-gray-500 dark:text-gray-400"
              : "text-gray-900 dark:text-white"
          }`}
        >
          {name}
        </h3>

        <p
          className={`text-base sm:text-lg font-bold mb-2 sm:mb-3 ${
            isSoldOut
              ? "text-gray-400 dark:text-gray-500 line-through"
              : "text-gray-900 dark:text-white"
          }`}
        >
          {price}
        </p>

        <StockStatus current={current} limit={limit} isSoldOut={isSoldOut} />
      </div>
    </article>
  );
}
