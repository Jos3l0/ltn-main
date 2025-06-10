"use client";

import { Button } from "@/shared_components/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const info = {
  friolatina: {
    logo: "/logos/logo-friolatina.svg",
    url: "/friolatina",
    bg: "/images/bg-friolatina.png",
  },
  bervill: {
    logo: "/logos/logo-bervill.svg",
    url: "/bervill",
    bg: "/images/bg-bervill.png",
  },
  acerolatina: {
    logo: "/logos/logo-acerolatina.svg",
    url: "/acerolatina",
    bg: "/images/bg-acerolatina.png",
  },
  simpletech: {
    logo: "/logos/logo-simpletech.svg",
    url: "/simpletech",
    bg: "/images/bg-simpletech.png",
  },
};

const HeroUnitSection = () => {
  const pathname = usePathname();
  const [bgImage, setBgImage] = useState("/images/bg-friolatina.png");

  const btn1Key =
    pathname.includes("friolatina") || pathname.includes("bervill")
      ? "friolatina"
      : "acerolatina";
  const btn2Key =
    pathname.includes("friolatina") || pathname.includes("bervill")
      ? "bervill"
      : "simpletech";

  useEffect(() => {
    setBgImage(info[btn1Key].bg);
  }, [btn1Key]);

  const scrollToContact = () => {
    const section = document.getElementById("contact-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[40rem] w-full">
      <div className="limit relative h-1/2">
        <div className="absolute bottom-0 top-1/3 z-30 mx-auto md:left-20 md:top-2/4">
          <span className="mb-4 block text-4xl text-white md:p-4 md:px-8 md:text-5xl">
            Soluciones <u className="text-4xl md:text-5xl">constructivas</u>{" "}
            <br />
            industriales y comerciales
          </span>
        </div>
      </div>
      <div className="limit relative h-1/2 px-4">
        <div className="absolute z-30 flex w-full flex-col items-start justify-between gap-8 md:bottom-16 md:flex-row md:items-end md:px-20">
          <div className="flex gap-4">
            <Link href={info[btn1Key].url}>
              <Button
                className={`max-w-96 bg-${btn1Key} p-4 hover:bg-${btn1Key}_hover md:p-8`}
                onClick={() => setBgImage(info[btn1Key].bg)}
              >
                <Image
                  src={info[btn1Key].logo}
                  alt="logo"
                  width={120}
                  height={25}
                  className="h-12 w-40"
                />
              </Button>
            </Link>
            <Link href={info[btn2Key].url}>
              <Button
                className={`max-w-96 p-4 bg-${btn2Key} hover:bg-${btn2Key}_hover md:p-8`}
                onClick={() => setBgImage(info[btn2Key].bg)}
              >
                <Image
                  src={info[btn2Key].logo}
                  alt="logo"
                  width={120}
                  height={25}
                  className="h-12 w-40"
                />
              </Button>
            </Link>
          </div>
          <Button
            variant="link"
            onClick={scrollToContact}
            className="flex gap-2 text-xl text-white"
          >
            Contactanos
            <Image
              src="/icons/chevron-white.svg"
              alt="chevron"
              width={20}
              height={20}
              className=""
            />
          </Button>
        </div>
      </div>
      <Image
        src={bgImage}
        alt="image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="transition-opacity duration-300 ease-in-out"
      />
    </section>
  );
};

export default HeroUnitSection;
