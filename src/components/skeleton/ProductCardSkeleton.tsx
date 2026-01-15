export function ProductCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 animate-pulse">
      {/* 이미지 영역 */}
      <div className="aspect-square w-full bg-gray-200 dark:bg-gray-700 rounded-lg" />

      {/* 컨텐츠 영역 */}
      <div className="mt-3">
        {/* 상품명 영역 */}
        <div className="min-h-10 mb-1">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-1" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
        </div>

        {/* 가격 */}
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-3" />

        {/* 재고 상태 텍스트 영역 */}
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
      </div>
    </div>
  );
}
