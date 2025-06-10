"use client";

import { ProductCarousel } from "@/app/_components/ProductCarousel/ProductCarousel";
import { cn } from "@/lib/utils";
import { Button } from "@/shared_components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { FC, HTMLAttributes } from "react";

const CTAButton: FC<HTMLAttributes<HTMLButtonElement>> = ({ className }) => (
  <Link href={"/#contact-section"}>
    <Button
      variant={"outline"}
      className={cn("border-white text-white", className)}
    >
      Comenzá tu proyecto
    </Button>
  </Link>
);

const products = [
  {
    src: "/images/friolatina/products/img1.png",
    alt: "Cámaras",
    link: "productos/refrigeracion/camaras-frigorificas",
  },
  {
    src: "/images/friolatina/products/img2.png",
    alt: "Puertas y portones",
    link: "productos/refrigeracion/puertas-y-portones",
  },
  {
    src: "/images/friolatina/products/img3.png",
    alt: "Túneles",
    link: "productos/refrigeracion/tuneles-de-congelado",
  },
  {
    src: "/images/friolatina/products/img5.png",
    alt: "Equipos industriales",
    link: "productos/refrigeracion/equipos-industriales",
  },
];

const RefrigeriacionProductsSection = () => {
  return (
    <section className="w-full bg-black">
      <div className="limit mb-12 flex flex-row content-center items-center justify-between pt-12">
        <h2 className="text-white">Productos de refrigeración</h2>
        <CTAButton className="hidden px-12 py-4 md:block" />
      </div>
      <div className="md:hidden">
        <ProductCarousel products={products} width={500} height={300} />
      </div>
      <div className="hidden h-[50rem] grid-cols-2 grid-rows-2 md:grid">
        {products.map((product) => (
          <div className="relative" key={product.alt}>
            <Link href={product.link}>
              <Image
                src={product.src}
                alt={product.alt}
                fill
                objectFit="cover"
              />
              <span className="absolute bottom-4 left-4 z-10 text-white">
                {product.alt}
              </span>
            </Link>
          </div>
        ))}
      </div>
      <div className="px-4 py-8 md:hidden">
        <CTAButton className="mx-auto block w-full max-w-96 px-12 py-4" />
      </div>
    </section>
  );
};

export default RefrigeriacionProductsSection;
