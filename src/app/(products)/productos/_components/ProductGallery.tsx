import React from "react";
import ProductGalleryCard from "./ProductGalleryCard";
import type { Product } from "../products";

interface Props {
  filteredProducts: Product[];
}

const ProductGallery = ({ filteredProducts }: Props) => {
  return (
    <ul className="grid w-full grid-cols-[repeat(auto-fill,_minmax(290px,_1fr))] justify-center gap-y-4">
      {filteredProducts.map((product) => (
        <ProductGalleryCard
          product={product}
          key={product.title}
        />
      ))}
    </ul>
  );
};

export default ProductGallery;
