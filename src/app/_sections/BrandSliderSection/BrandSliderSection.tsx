import { Button } from "@/shared_components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const principalBrands = [/*Logos de marcas */
  {
    src: "/brands/logo-rapanui.png",
    alt: "Rapanui",
  },
  {
    src: "/brands/logo-mccain.png",
    alt: "McCain",
  },
  {
    src: "/brands/logo-grido.png",
    alt: "Grido",
  },
  {
    src: "/brands/logo-tasa.png",
    alt: "Tasa Logística",
  },
  {
    src: "/brands/logo-nini.png",
    alt: "Nini Mayorísta",
  },
  {
    src: "/brands/logo-simplot.png",
    alt: "Simplot",
  },
];

const BrandSliderSection = () => {
  return (
    <section className="w-full pb-12">
      {/* <BrandSlider s/> */}
      <div className="flex flex-wrap justify-center gap-4">
        {principalBrands.map((brand) => (
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
      <div className="px-4 pt-16">
        <Link href={"/nuestros-aliados"}>
          <Button
            variant={"outline"}
            className="mx-auto block w-full max-w-96 px-12 py-4"
          >
            Nuestros clientes
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BrandSliderSection;
