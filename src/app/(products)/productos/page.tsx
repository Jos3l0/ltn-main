import React from "react";
import ProductGalleryPage from "./_components/sections/ProductGalleryPage";
import { products } from "./products";

const Page = () => {
  return <ProductGalleryPage products={products} />;
};

export default Page;
