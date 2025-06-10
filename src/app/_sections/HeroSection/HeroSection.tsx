import React from "react";
import { HeroCarousel } from "../../_components/HeroCarousel/HeroCarousel";

const HeroSection = () => {
  return (
    <section className="h-screen w-full pt-12 mb-[100px]">
      <HeroCarousel />
    </section>
  );
};

export default HeroSection;