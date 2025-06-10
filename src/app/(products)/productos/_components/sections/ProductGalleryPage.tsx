"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { categories, type Product } from "../../products";
import toSlug from "@/lib/toSlug";
import Filters from "../Filters";
import ProductModal from "../ProductModal";
import ProductGallery from "../ProductGallery";

const convertString = (str: string) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_");
};

const ProductGalleryPage = ({ products }: { products: Product[] }) => {
  const params = useParams();

  const category = params.category ?? null;
  const subcategory = params.subcategory ?? null;

  // Filtrar productos directamente basados en la categoría y subcategoría
  const filteredProducts = products.filter((product) => {
    const isCategoryMatch = category
      ? convertString(toSlug(product.category)) === category
      : true;
    const isSubcategoryMatch = subcategory
      ? convertString(toSlug(product.subcategory)) === subcategory
      : true;
    return isCategoryMatch && isSubcategoryMatch;
  });

  // Estado para el producto seleccionado
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product); // Establece el producto seleccionado
  };

  const closeModal = () => setSelectedProduct(null); // Cierra el modal

  return (
    <section className="mb-8 w-full px-4">
      <div className="limit mb-24 flex flex-col justify-between pt-4">
        <h2 className="mb-4 text-black">Nuestros productos</h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <Filters categories={categories} />
          <ProductGallery
            filteredProducts={filteredProducts}
            handleProductClick={handleProductClick}
          />
        </div>
        <ProductModal
          selectedProduct={selectedProduct}
          closeModal={closeModal}
        />
      </div>
    </section>
  );
};

export default ProductGalleryPage;
