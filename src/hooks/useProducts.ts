"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts, productKeys } from "@/lib/api";
import { sortProducts } from "@/utils/product";

/**
 * 상품 목록 조회 훅
 * - API에서 상품 목록을 가져와 정렬하여 반환
 * - 품절 상품은 하단으로, 나머지는 index 오름차순
 */
export function useProducts() {
  return useQuery({
    queryKey: productKeys.all,
    queryFn: fetchProducts,
    select: sortProducts,
  });
}
