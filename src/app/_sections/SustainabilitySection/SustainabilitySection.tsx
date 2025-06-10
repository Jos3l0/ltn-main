import React from "react";
import Image from "next/image";
// import { Button } from "@/shared_components/Button";

const SustainabilitySection = () => {
  return (
    <section className="relative flex w-full flex-col bg-[url('/images/bg-sustaintability.png')] bg-cover bg-[25%_center] md:min-h-[50rem] md:flex-row">
      <div className="relative p-8 md:h-full md:w-1/2">
        <div className="left-8 top-8 h-28 w-28 rounded-full bg-black/10 p-[2vw] backdrop-blur-lg md:bottom-4 md:top-auto md:h-56 md:w-56">
          <Image
            src={"/logos/logo-sustaintability.svg"}
            alt={"Logo sustentabilidad"}
            fill
            className="p-4 md:p-8"
          />
        </div>
      </div>
      <div className="z-30 ml-auto mt-[5rem] flex-1 bg-black/20 pb-4 backdrop-blur-lg md:right-0 md:mt-0 md:w-1/2 md:border-l">
        <h3 className="border-y border-white py-4 pl-12 pr-24 text-2xl text-white md:border-t-0 md:py-12 md:text-5xl">
          Tecnología para un mundo sustentable
        </h3>
        <p className="py-4 pl-12 pr-24 text-lg text-white md:py-8 md:text-2xl">
          Con más de 50 años de experiencia, nos destacamos por ofrecer
          soluciones de refrigeración y construcción sostenibles.
        </p>
        <p className="py-4 pl-12 pr-24 text-white md:py-8 md:text-lg">
          Nuestros sistemas reducen el impacto ambiental, optimizan el uso de
          recursos como el agua y la energía, y ofrecen una excelente aislación
          térmica y acústica.
        </p>
        {/* <Button
            variant={"outline"}
            className="mx-4 mt-4 border-white p-4 text-white md:mx-8 md:mt-8"
          >
            Más sobre sostenibilidad
          </Button> */}
      </div>
    </section>
  );
};

export default SustainabilitySection;
