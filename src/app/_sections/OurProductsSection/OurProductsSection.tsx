import { Button } from "@/shared_components/Button";
import React from "react";
import type { FC, HTMLAttributes } from "react";
import { ProductCarousel } from "../../_components/ProductCarousel/ProductCarousel";
import Link from "next/link";
import Animate from "@/app/_animations/Animate";

const CTAButton: FC<HTMLAttributes<HTMLButtonElement>> = ({ className }) => (
  <Link href={"/#contact-section"}>
    <Button variant={"outline"} className={className}>
      Comenzá tu proyecto
    </Button>
  </Link>
);

const products = [
  {
    src: "/images/our-products/img1.png",
    alt: "Cámaras frigoríficas",
    link: "/productos/refrigeracion/camaras-frigorificas",
  },
  {
    src: "/images/our-products/img2.png",
    alt: "Proyectos industriales",
    link: "/proyectos/proyectos-industriales",
  },
  {
    src: "/images/our-products/img3.png",
    alt: "Proyectos residenciales",
    link: "/proyectos/proyectos-residenciales",
  },
];

const OurProductsSection = () => {
  return (
    <section className="w-full bg-black pb-12">
      <div className="limit mb-24 flex flex-row content-center items-center justify-between pt-12">
        <h2 className="text-white">Nuestros Productos</h2>
        <CTAButton className="hidden border-white px-12 py-4 text-white md:block" />
      </div>
      <Animate type="slide" direction="left" distance={100} delay={200}>
        <ProductCarousel products={products} width={335} height={528} />
      </Animate>
      <div className="px-4 pt-16">
        <CTAButton className="mx-auto block w-full max-w-96 border-white px-12 py-4 text-white md:hidden" />
      </div>
    </section>
  );
};

export default OurProductsSection;
