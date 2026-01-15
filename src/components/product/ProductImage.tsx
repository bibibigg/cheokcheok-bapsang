"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImageProps {
  name: string;
  image: string | null;
}

export function ProductImage({ name, image }: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState(image ?? "/placeholder.png");

  return (
    <div className="aspect-square w-full bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden relative">
      <Image
        src={imgSrc}
        alt={name}
        fill
        className="object-cover"
        onError={() => {
          if (imgSrc !== "/placeholder.png") {
            setImgSrc("/placeholder.png");
          }
        }}
      />
    </div>
  );
}
