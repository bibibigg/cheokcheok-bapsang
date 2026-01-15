'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function QueryProvider({ children }: Props) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 30초간 캐시 유지 (불필요한 API 요청 방지)
            staleTime: 30 * 1000,
            // 실패 시 3번까지 재시도
            retry: 3,
            // 탭 전환 시 자동 리페치 비활성화 (화면 깜빡임 방지)
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}