interface ErrorFallbackProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorFallback({
  message = "데이터를 불러오는데 실패했습니다.",
  onRetry,
}: ErrorFallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-16 h-16 mb-4 text-gray-400 dark:text-gray-500">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
        {message}
      </p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
        >
          다시 시도
        </button>
      )}
    </div>
  );
}
