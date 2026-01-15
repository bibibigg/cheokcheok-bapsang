/**
 * 상품 관련 유틸리티 함수
 */

import type { Product, ProductWithSoldOut } from "@/types/product";

/**
 * 상품 품절 여부 확인
 */
export function isSoldOut(product: Product): boolean {
  return product.current >= product.limit;
}

/**
 * 상품 목록 정렬
 * - 품절 상품은 하단으로 이동
 * - 같은 그룹 내에서는 index 오름차순
 */
export function sortProducts(products: Product[]): ProductWithSoldOut[] {
  const productsWithSoldOutFlag = products.map((product) => ({
    ...product,
    isSoldOut: isSoldOut(product),
  }));

  return productsWithSoldOutFlag.sort((firstProduct, secondProduct) => {
    // 품절 상품은 하단으로
    if (firstProduct.isSoldOut !== secondProduct.isSoldOut) {
      return firstProduct.isSoldOut ? 1 : -1;
    }
    // 같은 그룹 내에서는 index 오름차순
    return firstProduct.index - secondProduct.index;
  });
}
