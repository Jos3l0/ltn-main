"use client";

import Animate from "@/app/_animations/Animate";
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
    src: "/images/construction/products/techos.png",
    alt: "Techos",
    link: "productos/construccion/techos-y-cubiertas",
  },
  {
    src: "/images/construction/products/paredes.png",
    alt: "Paredes",
    link: "productos/construccion/paredes-y-muros",
  },
  {
    src: "/images/construction/products/pisos.png",
    alt: "Pisos",
    link: "productos/construccion/pisos-y-entrepisos",
  },
  {
    src: "/images/construction/products/perfileria.png",
    alt: "Perfilería",
    link: "productos/construccion/perfileria",
  },
];

const ConstructionProductsSection = () => {
  return (
    <section className="w-full bg-black">
      <div className="limit mb-12 flex flex-row content-center items-center justify-between pt-12">
        <h2 className="text-white">Productos de construcción</h2>
        <CTAButton className="hidden px-12 py-4 md:block" />
      </div>
      <Animate direction="left">
        <div className="md:hidden">
          <ProductCarousel
            products={products}
            width={500}
            height={300}
            className="aspect-1"
          />
        </div>
      </Animate>
      <Animate>
        <div className="hidden h-[50rem] grid-cols-2 grid-rows-2 md:grid">
          {products.map((product) => (
            <div className="relative h-full w-full" key={product.alt}>
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
      </Animate>
      <div className="px-4 py-8 md:hidden">
        <CTAButton className="mx-auto block w-full max-w-96 px-12 py-4" />
      </div>
    </section>
  );
};

export default ConstructionProductsSection;
