# 척척밥상 공동구매 서비스

## 링크

https://cheokcheok-bapsang.vercel.app/

## 주요 기능

1. **데이터 정렬**

   - 0~49 범위의 상품을 index 기준 오름차순으로 정렬
   - 무작위로 내려오는 데이터를 자동으로 정렬

2. **이미지 공간 확보**

   - 이미지가 null이어도 공간을 확보하여 레이아웃 유지
   - placeholder 이미지로 시인성 향상
   - 정사각형 비율(aspect-square)로 일관된 디자인

3. **품절 상품 처리**

   - 품절 상품(current ≥ limit)은 자동으로 하단 배치
   - 품절되지 않은 상품은 index 순서 유지
   - 품절 상품 시각적 표시:
     - 우측 상단 "품절" 배지
     - 전체 카드 opacity 감소
     - 가격에 취소선 표시

4. **로딩 UX**

   - 1~5초 API 지연시간 동안 스켈레톤 UI 표시
   - 12개의 스켈레톤 카드로 로딩 상태 표현
   - 부드러운 애니메이션 효과

5. **기술 스택**

   - TypeScript + Next.js 16
   - React Query로 데이터 페칭 최적화
   - Tailwind CSS v4로 스타일링
   - Framer Motion으로 애니메이션 효과

6. **반응형 디자인**

   - PC/모바일 완벽 대응
   - 그리드: 모바일 2열, 태블릿 3열, PC 4열
   - 모든 텍스트/여백 반응형 조정

7. **다크모드 지원**

   - 시스템 설정에 따른 자동 다크모드

8. **재고 상태 표시**

   - 일반: 남은 수량만 표시

9. **스크롤 버튼**

   - 300px 이상 스크롤 시 자동 표시
   - Framer Motion으로 톡톡 튀는 애니메이션
   - 클릭 시 맨 위로 부드럽게 이동

10. **SEO 개선**
    - **메타태그**: title, description 최적화
    - **OG(Open Graph) 태그**: 소셜 미디어 공유 시 미리보기 최적화
      - og:type, og:title, og:description
      - og:image (1200x630 OG 이미지)
    - **언어 설정**: `<html lang="ko">` 한국어 명시
    - **metadataBase**: Vercel 배포 URL 설정

## 기술 스택

### Core

- **Next.js** 16.1.2 - React 프레임워크
- **React** 19.2.3 - UI 라이브러리
- **TypeScript** 5 - 타입 안정성

### 상태 관리 & 데이터

- **TanStack Query** (React Query) 5.90.17 - 서버 상태 관리

### 스타일링

- **Tailwind CSS** 4 - 유틸리티 CSS 프레임워크
- **Framer Motion** 12.26.2 - 애니메이션

### 코드 품질

- **ESLint** - 코드 린팅
- **TypeScript** - 타입 체킹

## 프로젝트 구조

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx             # 루트 레이아웃 (메타태그, OG 태그)
│   ├── page.tsx               # 메인 페이지
│   └── error.tsx              # 에러 페이지
├── components/
│   ├── common/                # 공통 컴포넌트
│   │   ├── ErrorFallback.tsx  # 에러 폴백 UI
│   │   ├── ScrollToTopButton.tsx # 맨 위로 버튼
│   │   └── StockStatus.tsx    # 재고 상태 표시
│   ├── product/               # 상품 관련 컴포넌트
│   │   ├── ProductCard.tsx    # 상품 카드
│   │   ├── ProductGrid.tsx    # 상품 그리드
│   │   ├── ProductImage.tsx   # 상품 이미지
│   │   └── SoldOutBadge.tsx   # 품절 배지
│   └── skeleton/              # 스켈레톤 UI
│       ├── ProductCardSkeleton.tsx
│       └── ProductGridSkeleton.tsx
├── hooks/
│   └── useProducts.ts         # 상품 데이터 훅
├── lib/
│   ├── api.ts                 # API 클라이언트
│   └── QueryProvider.tsx      # React Query 프로바이더
├── types/
│   └── product.ts             # 타입 정의
└── utils/
    └── product.ts             # 상품 유틸리티 (정렬 등)
```

## 주요 구현 로직

### 상품 정렬 알고리즘

```typescript
// src/utils/product.ts
export function sortProducts(products: Product[]): ProductWithSoldOut[] {
  const productsWithSoldOutFlag = products.map((product) => ({
    ...product,
    isSoldOut: product.current >= product.limit,
  }));

  return productsWithSoldOutFlag.sort((a, b) => {
    // 1. 품절 상품은 하단으로
    if (a.isSoldOut !== b.isSoldOut) {
      return a.isSoldOut ? 1 : -1;
    }
    // 2. 같은 그룹 내에서는 index 오름차순
    return a.index - b.index;
  });
}
```

### React Query 캐싱

```typescript
// src/hooks/useProducts.ts
export function useProducts() {
  return useQuery({
    queryKey: productKeys.all,
    queryFn: fetchProducts,
    select: sortProducts, // 데이터 변환
  });
}
```

### SEO 메타데이터

```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "척척밥상",
  description: "신선한 식재료를 합리적인 가격에 공동구매하세요",
  openGraph: {
    type: "website",
    title: "척척밥상",
    description: "신선한 식재료를 합리적인 가격에 공동구매하세요",
    images: [
      {
        url: `${siteUrl}/cheokcheok-bapsang-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "척척밥상 공동구매",
      },
    ],
  },
};
```
