"use client";

import Image from "next/image";
import { brands, type Item } from "./brands";
import styles from "./brandSlider.module.css";
import { cn } from "@/lib/utils";

const getRandomBrands = (brands: Item[]) =>
  [...brands].sort(() => 0.5 - Math.random()).slice(0, 50);

const BrandItem = ({ position, src, alt }: Item & { position: number }) => {
  return (
    <div
      className={cn(styles.item)}
      style={
        {
          "--position": position,
        } as React.CSSProperties
      }
    >
      <Image
        src={src}
        alt={alt}
        width={150}
        height={100}
        className="h-[var(--height)] w-[var(--width)] object-contain"
      />
    </div>
  );
};

export const BrandSlider = () => {
  const randomBrands = getRandomBrands(brands);

  return (
    <div
      className={cn(styles.slider, "w-full overflow-hidden")}
      style={
        {
          "--width": "200px",
          "--height": "120px",
          "--quantity": "50",
        } as React.CSSProperties
      }
    >
      <div className={cn(styles.list)}>
        {randomBrands.map((brand, index) => (
          <BrandItem
            key={brand.alt}
            position={index + 1}
            src={brand.src}
            alt={brand.alt}
          />
        ))}
      </div>
    </div>
  );
};
