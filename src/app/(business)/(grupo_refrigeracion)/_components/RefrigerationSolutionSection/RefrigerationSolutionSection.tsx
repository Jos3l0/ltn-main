import Image from "next/image";
import React from "react";
import type { FC, HTMLAttributes } from "react";

const Title: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => (
  <div className={className}>
    <span className="mb-8 inline-block text-gray">SOLUCIONES PARA TODOS</span>
    <h2>¡Olvídate de las pérdidas de tus productos!</h2>
  </div>
);

const RefrigerationSolutionSection = () => {
  return (
    <section className="grid-rows-auto mx-auto grid max-w-[1200px] grid-cols-1 justify-between gap-[5vw] p-4 pt-20 lg:grid-cols-2 lg:flex-row lg:p-20">
      <Title className="lg:hidden" />
      <div className="relative mx-auto grid w-fit grid-cols-2 grid-rows-2 gap-4">
        <div className="relative col-span-2">
          <Image
            src="/images/friolatina/img1.png"
            alt="Imagen"
            width={600}
            height={280}
            className="h-full w-full"
            objectFit="cover"
          />
        </div>
        <div className="relative col-span-1">
          <Image
            src="/images/friolatina/img2.png"
            alt="Imagen"
            width={290}
            height={280}
            className="h-full w-full"
            objectFit="cover"
          />
        </div>
        <div className="relative col-span-1">
          <Image
            src="/images/friolatina/img3.png"
            alt="Imagen"
            width={290}
            height={280}
            className="h-full w-full"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="">
        <Title className="hidden lg:block" />
        <div className="flex flex-col gap-4">
          <p>
            Sabemos que los problemas con los equipos de refrigeración o la
            falta de inversión en ellos pueden generar grandes pérdidas
            económicas para tu negocio.
          </p>
          <p>
            Ofrecemos soluciones completas de refrigeración, incluyendo cámaras
            frigoríficas y equipos de frío de alta eficiencia energética.
            Nuestro equipo no solo te ayudará a calcular la cantidad exacta de
            refrigeración que necesitas, sino que también te acompañará durante
            la instalación y el servicio postventa.
          </p>
          <p>
            Utilizamos paneles para cámaras frigoríficas y equipos de
            refrigeración industrial de última generación para garantizar la
            conservación óptima de tus productos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RefrigerationSolutionSection;
