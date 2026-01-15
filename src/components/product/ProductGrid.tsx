import type { ProductWithSoldOut } from "@/types/product";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: ProductWithSoldOut[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.index} product={product} />
      ))}
    </div>
  );
}
