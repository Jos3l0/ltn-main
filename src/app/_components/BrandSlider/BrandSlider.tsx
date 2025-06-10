"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shared_components/Carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { brands, type Item } from "./brands";

const BrandItem = ({ src, alt }: Item) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={70}
        height={10}
        className="mx-auto mb-4 object-cover"
      />
    </div>
  );
};

export const BrandSlider = () => {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        containScroll: "trimSnaps",
      }}
      plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}
      className="m-auto w-full"
    >
      <CarouselContent className="flex items-center lg:justify-center">
        {brands.slice(0, 12).map((brand) => (
          <CarouselItem className={"min-w-[8rem] basis-0 px-0"} key={brand.alt}>
            <BrandItem src={brand.src} alt={brand.alt} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
