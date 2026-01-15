"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductGridSkeleton } from "@/components/skeleton/ProductGridSkeleton";
import { ErrorFallback } from "@/components/common/ErrorFallback";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";

export default function HomePage() {
  const { data: products, isLoading, isError, error, refetch } = useProducts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            척척밥상
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            신선한 식재료를 합리적인 가격에
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-7xl">
        {isLoading ? (
          <ProductGridSkeleton />
        ) : isError ? (
          <ErrorFallback
            message={error?.message || "상품을 불러오는데 실패했습니다."}
            onRetry={refetch}
          />
        ) : products ? (
          <>
            <ProductGrid products={products} />
          </>
        ) : null}
        <ScrollToTopButton />
      </main>
    </div>
  );
}
