import Image from "next/image";
import React from "react";
import type { FC, HTMLAttributes } from "react";

const Title: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => (
  <div className={className}>
    <h2 className="text-4xl">
      Somos orgullosos fabricantes de paneles aislantes
    </h2>
  </div>
);

const ConstructionSolutionSection = () => {
  return (
    <section className="grid-rows-auto limit grid grid-cols-1 justify-between gap-[5vw] p-4 pt-20 lg:grid-cols-2 lg:flex-row lg:p-20">
      <Title className="lg:hidden" />
      <div className="relative col-span-1">
        <Image
          src="/images/construction/Group 255.png"
          alt="Imagen"
          width={600}
          height={280}
          className="w-full max-w-96 md:max-w-[42rem]"
          objectFit="cover"
        />
      </div>
      <div className="col-span-1 space-y-4">
        <Title className="hidden lg:block" />
        <div className="mb-8 flex flex-col gap-4">
          <p>
            Nuestros paneles ofrecen versatilidad arquitectónica y una estética
            superior.
          </p>
          <p>
            Con una excelente aislación acústica y térmica, son fáciles de
            transportar e instalar, garantizando eficiencia y confort en
            cualquier construcción.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConstructionSolutionSection;
