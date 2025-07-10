import React from "react";
import type { Product } from "../products";
import Image from "next/image";
import Link from "next/link";
import toSlug from "@/lib/toSlug"; // Asegúrate de tener esta función

interface Props {
  product: Product;
}

const ProductGalleryCard = ({ product }: Props) => {
  if (!product.productImages) return null;
  return (
    <li key={product.title} className="cursor-pointer">
      <Link
        href={`/productos/${toSlug(product.category)}/${toSlug(product.subcategory)}/${toSlug(product.title)}`}
        className="block"
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
      </Link>
    </li>
  );
};

export default ProductGalleryCard;

export default ProductGalleryCard;export default ProductGalleryCard;

<ul>
  {filteredProducts.map((product) => (
    <ProductGalleryCard key={product.title} product={product} />
  ))}
</ul>
