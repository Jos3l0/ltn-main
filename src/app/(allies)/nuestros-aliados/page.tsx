import React from "react";
import Image from "next/image";
import { brands } from "@/app/_components/BrandSlider/brands";

const AlliesPage = () => {
  return (
    <section className="my-12">
      <h1 className="mb-8 text-center text-4xl md:ml-8">Nuestros aliados</h1>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] justify-items-center gap-4">
        {brands.map((brand) => (
          <Image
            key={brand.alt}
            src={brand.src}
            alt={brand.alt}
            width={150}
            height={100}
            className="h-[var(--height)] w-[var(--width)] object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default AlliesPage;
