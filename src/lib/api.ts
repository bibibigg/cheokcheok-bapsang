/**
 * API 클라이언트
 */

import type { ApiResponse, Product } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

/**
 * 상품 목록 조회
 * @throws {Error} 네트워크 오류 또는 API 오류 시
 */
export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`상품을 불러오는데 실패했습니다. (${response.status})`);
  }

  const data: ApiResponse = await response.json();
  return data.content;
}

/** React Query 키 */
export const productKeys = {
  all: ["products"] as const,
};
