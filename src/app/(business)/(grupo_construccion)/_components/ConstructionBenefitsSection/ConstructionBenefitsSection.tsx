import Animate from "@/app/_animations/Animate";
import Image from "next/image";
import React from "react";

const benefits = [
  {
    icon: "/icons/benefits/lamp.png",
    description: "Soluciones Constructivas Eficientes",
  },
  {
    icon: "/icons/benefits/leaf.png",
    description: "Construcción Respetuosa con el Medio Ambiente",
  },
  {
    icon: "/icons/benefits/building.png",
    description: "Compatibilidad con Diversos Sistemas de Construcción",
  },
  {
    icon: "/icons/benefits/color-swatch.png",
    description: "Diseños Atractivos y Personalizables",
  },
  {
    icon: "/icons/benefits/flash.png",
    description: "Instalación Rápida y Eficiente",
  },
  {
    icon: "/icons/benefits/money-receive.png",
    description: "Reducción de Costos de Mantenimiento",
  },
];

const Benefit = ({
  icon,
  description,
  index,
}: {
  icon: string;
  description: string;
  index: number;
}) => {
  const borderLogic: Record<number, string> = {
    0: "",
    1: "border-gray border-t-[1px] md:border-t-0 md:border-l-[1px]",
    2: "border-gray border-t-[1px] lg:border-r-0 lg:border-l-[1px] lg:border-t-0",
    3: "border-gray border-t-[1px] md:border-l-[1px] lg:border-r-0 lg:border-l-0",
    4: "border-gray border-t-[1px] lg:border-r-0 lg:border-l-[1px]",
    5: "border-gray border-t-[1px] md:border-l-[1px] lg:border-r-0 lg:border-l-[1px]",
  };

  return (
    <div className={`w-full px-4 py-12 md:p-[4vw] ${borderLogic[index]}`}>
      <Image src={icon} alt="Icon" width={50} height={50} className="mb-4" />
      <span className="inline-block max-w-80 text-2xl text-white">
        {description}
      </span>
    </div>
  );
};

const ConstructionBenefitsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#1C1D1E] p-12 md:p-24">
      <div className="limit">
        <div className="relative z-10">
          <h2 className="mb-8 text-white">
            En Acerolatina & Simpletech te ofrecemos
          </h2>
          <Animate type="blur">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, i) => (
                <Benefit
                  key={benefit.icon}
                  icon={benefit.icon}
                  description={benefit.description}
                  index={i}
                />
              ))}
            </div>
          </Animate>
        </div>
        <div className="absolute -left-72 top-0 h-[900px] w-[900px] rounded-full bg-[#E65303] opacity-20 blur-[800px] filter" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-[#FF9425] opacity-20 blur-[800px] filter" />
      </div>
    </section>
  );
};

export default ConstructionBenefitsSection;
