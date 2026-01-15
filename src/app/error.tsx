'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-500">
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
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          문제가 발생했습니다
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {error.message || '알 수 없는 오류가 발생했습니다.'}
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}