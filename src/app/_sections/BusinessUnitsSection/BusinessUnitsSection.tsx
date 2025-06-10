"use client";

import Animate from "@/app/_animations/Animate";
import { Button } from "@/shared_components/Button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Item {
  logo: string;
  description: string;
  bg: string;
}

const bussiness: Record<string, Item> = {
  acerolatina: {
    logo: "/logos/logo-acerolatina.svg",
    description:
      "Empresa dedicada a la fabricación y comercialización de paneles y soluciones arquitectónicas con aislamiento térmico y acústico.",
    bg: "/images/bg-acerolatina.png",
  },
  simpletech: {
    logo: "/logos/logo-simpletech.svg",
    description:
      "Simpletech es una solución integral para la construcción, renovación y ampliación de espacios en el ámbito residencial.",
    bg: "/images/bg-simpletech.png",
  },
  friolatina: {
    logo: "/logos/logo-friolatina.svg",
    description:
      "Empresa proveedora de soluciones integrales en cámaras frigoríficas modulares, cerramientos y proyectos llave en mano.",
    bg: "/images/bg-friolatina.png",
  },
  bervill: {
    logo: "/logos/logo-bervill.svg",
    description:
      "Dedicados a la fabricación de Equipamientos frigoríficos y unidades condensadoras.",
    bg: "/images/bg-bervill.jpg",
  },
};

const BusinessUnitsSection = () => {
  const [activeBussiness, setActiveBussiness] =
    useState<keyof typeof bussiness>("acerolatina");
  const [bgImage, setBgImage] = useState(bussiness.acerolatina?.bg);
  const [logo, setLogo] = useState(bussiness.acerolatina?.logo);
  const [description, setDescription] = useState(
    bussiness.acerolatina?.description
  );

  const handleChange = (value: keyof typeof bussiness) => {
    setActiveBussiness(value);
    setLogo(bussiness[value]?.logo);
    setBgImage(bussiness[value]?.bg);
    setDescription(bussiness[value]?.description);
  };

  return (
    <section className="relative h-[40rem] w-full">
      <div className="relative mx-auto max-w-[1200px]">
        <div className="absolute top-1/3 z-30 mx-auto max-w-96 translate-y-1/2 p-8 md:left-20 md:top-2/4">
          <Animate distance={0} threshold={0.3}>
            <>
              <Image
                src={logo!}
                alt="logo"
                className="mb-4"
                width={200}
                height={100}
              />
              <p
                className="mb-4 text-white"
                style={{ textShadow: "0 0 4px black" }}
              >
                {description}
              </p>
              <Link
                href={`/${activeBussiness}`}
                className="flex gap-2 text-white"
                style={{ textShadow: "0 0 4px black" }}
              >
                Conoce más
                <Image
                  src="/icons/chevron-white.svg"
                  alt="chevron"
                  width={20}
                  height={20}
                  className="rotate-[225deg]"
                />
              </Link>
            </>
          </Animate>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="absolute bottom-8 z-30 grid grid-cols-2 grid-rows-2 justify-items-center gap-4 w-fit">
          <Animate direction="down" threshold={0.8}>
            <Button
              className="relative w-40 min-h-20 max-w-48 bg-acerolatina p-4 hover:bg-acerolatina_hover md:px-24 md:py-12"
              onClick={() => handleChange("acerolatina")}
            >
              <Image
                src="/logos/logo-acerolatina.png"
                alt="logo"
                fill
                className="p-4 object-contain"
              />
            </Button>
          </Animate>
          <Animate direction="right" threshold={0.8}>
            <Button
              className="relative w-40 min-h-20 max-w-48 bg-friolatina p-4 hover:bg-friolatina_hover md:px-24 md:py-12"
              onClick={() => handleChange("friolatina")}
            >
              <Image
                src="/logos/logo-friolatina.png"
                alt="logo"
                fill
                className="p-4 object-contain"
              />
            </Button>
          </Animate>
          <Animate direction="left" threshold={0.8}>
            <Button
              className="relative w-40 min-h-20 max-w-48 bg-simpletech p-4 hover:bg-simpletech_hover md:px-24 md:py-12"
              onClick={() => handleChange("simpletech")}
            >
              <Image
                src="/logos/logo-simpletech.png"
                alt="logo"
                fill
                className="p-5 object-contain"
              />
            </Button>
          </Animate>
          <Animate threshold={0.8}>
            <Button
              className="relative w-40 min-h-20 max-w-48 bg-bervill p-4 hover:bg-bervill_hover md:px-24 md:py-12"
              onClick={() => handleChange("bervill")}
            >
              <Image
                src="/logos/logo-bervill.png"
                alt="logo"
                fill
                className="p-5 object-contain"
              />
            </Button>
          </Animate>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/50 z-10" />
      <Image
        src={bgImage!}
        alt="image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="transition-opacity duration-300 ease-in-out"
      />
    </section>
  );
};

export default BusinessUnitsSection;
