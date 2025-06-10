"use client";

import { Button } from "@/shared_components/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600); // Muestra el botón después de 100px de scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="icon"
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 z-50 md:bottom-16 bg-black rounded-full p-2 transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <Image
        src="/icons/arrow-top.svg"
        alt="Botón back to top"
        width={15}
        height={15}
        className="w-7"
      />
    </Button>
  );
};

export default BackToTopBtn;
