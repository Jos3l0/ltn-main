import React from "react";
import type { Product } from "../products";
import Image from "next/image";

interface Props {
  product: Product;
  handleProductClick: (product: Product) => void;
}

const ProductGalleryCard = ({ product, handleProductClick }: Props) => {
  if (!product.productImages) return null;
  return (
    <li
      key={product.title}
      onClick={() => handleProductClick(product)}
      className="cursor-pointer"
    >
      <div className="relative mb-4 h-72 w-72 border-[1px] border-lightgray">
        <Image
          src={product.productImages[0] ?? "/images/products/default-image.png"}
          alt="image"
          objectFit="contain"
          fill
        />
      </div>
      <h4 className="pl-8 font-medium">{product.title}</h4>
    </li>
  );
};

export default ProductGalleryCard;
