/**
 * 상품 관련 타입 정의
 */

export interface Product {
  index: number;
  name: string;
  price: string;
  current: number;
  limit: number;
  image: string | null;
}

/** API 응답 전체 구조 */
export interface ApiResponse {
  /** 상품 목록 */
  content: Product[];
  /** HTTP 상태 코드 */
  status: number;
}

export interface ProductWithSoldOut extends Product {
  /** 품절 여부 (current >= limit) */
  isSoldOut: boolean;
}
