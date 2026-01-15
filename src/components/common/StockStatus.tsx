interface StockStatusProps {
  /** 현재 주문 수량 */
  current: number;
  /** 제공 가능 수량 */
  limit: number;
  /** 품절 여부 */
  isSoldOut?: boolean;
}

const ALMOST_SOLD_OUT_THRESHOLD = 10;

export function StockStatus({
  current,
  limit,
  isSoldOut = false,
}: StockStatusProps) {
  const remaining = limit - current;
  const isAlmostSoldOut =
    remaining > 0 && remaining < ALMOST_SOLD_OUT_THRESHOLD;

  if (isSoldOut) {
    return (
      <p className="text-xs sm:text-sm font-medium text-gray-400 dark:text-gray-500">
        품절되었습니다
      </p>
    );
  }

  if (isAlmostSoldOut) {
    return (
      <div className="flex items-center gap-1">
        <span className="text-[0.625rem] sm:text-xs font-bold text-red-500 bg-red-50 dark:bg-red-900/30 px-1 sm:px-1.5 py-0.5 rounded whitespace-nowrap">
          품절임박
        </span>
        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 truncate">
          {remaining.toLocaleString()}개 남음
        </span>
      </div>
    );
  }

  return (
    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
      <span className="font-medium text-gray-900 dark:text-white">
        {remaining.toLocaleString()}개 남음
      </span>
    </p>
  );
}
