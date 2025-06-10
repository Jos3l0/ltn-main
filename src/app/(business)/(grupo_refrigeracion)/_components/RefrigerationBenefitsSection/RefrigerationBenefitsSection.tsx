import Animate from "@/app/_animations/Animate";
import Image from "next/image";
import React from "react";

const benefits = [
  {
    icon: "/icons/benefits/user.png",
    description: "Asesoramiento técnico detallado",
  },
  {
    icon: "/icons/benefits/snow.png",
    description: "Conservación de productos varios",
  },
  {
    icon: "/icons/benefits/shop.png",
    description: "Productos adaptables a diversas industrias",
  },
  {
    icon: "/icons/benefits/discount.png",
    description: "Ahorro significativo en inversión y energía",
  },
  {
    icon: "/icons/benefits/truck.png",
    description: "Red de distribuidores capacitados",
  },
  {
    icon: "/icons/benefits/wind.png",
    description: "Proyectos integrales de refrigeración",
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

const RefrigerationBenefitsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#1C1D1E] p-12 md:p-24">
      <div className="limit">
        <div className="relative z-10">
          <h2 className="mb-8 text-white">En Friolatina & Bervill ofrecemos</h2>
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
        <div className="absolute -left-72 top-0 h-[900px] w-[900px] rounded-full bg-[#2837DD] opacity-20 blur-[800px] filter" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#2837DD] opacity-20 blur-[800px] filter" />
      </div>
    </section>
  );
};

export default RefrigerationBenefitsSection;
