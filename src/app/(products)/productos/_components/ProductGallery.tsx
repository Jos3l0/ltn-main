import React from "react";
import ProductGalleryCard from "./ProductGalleryCard";
import type { Product } from "../products";

interface Props {
  filteredProducts: Product[];
  handleProductClick: (product: Product) => void;
}

const ProductGallery = ({ filteredProducts, handleProductClick }: Props) => {
  return (
    <ul className="grid w-full grid-cols-[repeat(auto-fill,_minmax(290px,_1fr))] justify-center gap-y-4">
      {filteredProducts.map((product) => (
        <ProductGalleryCard
          product={product}
          handleProductClick={handleProductClick}
          key={product.title}
        />
      ))}
    </ul>
  );
};

export default ProductGallery;
