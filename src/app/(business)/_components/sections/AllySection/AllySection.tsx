// import { BrandSlider } from "@/app/_components/BrandSlider/BrandSlider";
import { BrandSlider } from "@/app/_components/BrandSlider/BrandSliderSinEmbla";
import { Button } from "@/shared_components/Button";
import React from "react";

const AllySection = () => {
  return (
    <section>
      <div className="limit mb-24 flex flex-row content-center items-center justify-between pt-12">
        <h2 className="">Encontrá a tu aliado más cercano</h2>
        <Button className="hidden px-12 py-4 md:block">
          Contactar distribuidores
        </Button>
      </div>
      <BrandSlider />
      <div className="px-4 pt-16">
        <Button className="mx-auto block w-full max-w-96 px-12 py-4 md:hidden">
          Contactar distribuidores
        </Button>
      </div>
    </section>
  );
};

export default AllySection;
