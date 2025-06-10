"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type Category = "Construcción" | "Refrigeración";

// Ejemplo de productos para diferentes categorías
const productsByCategory: Record<
  Category,
  { title: string; imagePath: string; url: string }[]
> = {
  Construcción: [
    {
      title: "Techos y cubiertas",
      imagePath:
        "/images/products/Foilroof/productImages/FR50 TR GRIS SILVER.png",
      url: "/productos/construccion/techos-y-cubiertas",
    },
    {
      title: "Paredes y muros",
      imagePath: "/images/products/Classwall/header.png",
      url: "/productos/construccion/paredes-y-muros",
    },
    {
      title: "Pisos y entrepisos",
      imagePath:
        "/images/products/Panel_de_entrepiso/productImages/Pisos-entrepisos-26.jpg",
      url: "/productos/construccion/pisos-y-entrepisos",
    },
    // Agrega más productos si es necesario
  ],
  Refrigeración: [
    {
      title: "Cámaras frigoríficas",
      imagePath:
        "/images/products/Camaras_standard/productImages/Camaras Comerciales_1.jpg",
      url: "/productos/refrigeracion/camaras-frigorificas",
    },
    {
      title: "Puertas y portones",
      imagePath: "/images/products/Portones/productImages/Productos-1.jpg",
      url: "/productos/refrigeracion/puertas-y-portones",
    },
    {
      title: "Túneles de Congelado",
      imagePath:
        "/images/products/Camaras_Industriales/productImages/Camaras Industriales-1.jpg",
      url: "/productos/refrigeracion/tuneles-de-congelado",
    },
    // Agrega más productos si es necesario
  ],
};

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setActiveCategory(null);
  }, [pathname]);

  return (
    <menu
      className="hidden h-full content-center lg:block"
      onMouseLeave={() => setActiveCategory(null)}
    >
      <ul className="flex gap-8">
        {/* Link Construcción */}
        <li
          onMouseEnter={() => setActiveCategory("Construcción")}
          className="flex cursor-pointer items-center"
        >
          Construcción
          <Image
            src={"/icons/chevron-black.svg"}
            width={20}
            height={20}
            className={`relative top-[1px] ml-1 h-3 w-3 transition duration-300 ${
              activeCategory === "Construcción" ? "rotate-180" : "rotate-0"
            }`}
            alt="Chevron"
          />
        </li>

        {/* Link Refrigeración */}
        <li
          onMouseEnter={() => setActiveCategory("Refrigeración")}
          className="flex cursor-pointer items-center"
        >
          Refrigeración
          <Image
            src={"/icons/chevron-black.svg"}
            width={20}
            height={20}
            className={`relative top-[1px] ml-1 h-3 w-3 transition duration-300 ${
              activeCategory === "Refrigeración" ? "rotate-180" : "rotate-0"
            }`}
            alt="Chevron"
          />
        </li>

        <li>
          <Link href="/productos" className="">
            Productos
          </Link>
        </li>
        <li>
          <Link href="/proyectos" className="">
            Proyectos
          </Link>
        </li>
        <li>
          <Link href="/#contact-section" className="">
            Contacto
          </Link>
        </li>
      </ul>

      {/* Contenido del dropdown dinámico */}
      {activeCategory && (
        <div
          key={activeCategory}
          className="absolute left-0 top-[120px] z-40 h-96 w-[100vw] border-t-[1px] border-gray bg-white"
        >
          <div className="limit flex h-full">
            <div className="flex flex-1 items-center justify-around border-r-[1px] border-gray">
              {productsByCategory[activeCategory]?.map((product) => (
                <div key={product.title} className="h-30 w-30 flex flex-col">
                  <Link href={product.url}>
                    <Image
                      src={product.imagePath}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="mx-auto h-fit max-h-60 min-h-60 w-full min-w-60 max-w-60 object-contain"
                    />
                    <span className="text-grey bottom-4 left-8 z-10 text-center">
                      {product.title}
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Enlaces adicionales para la categoría activa */}
            <div className="flex flex-col gap-8 p-12">
              {activeCategory === "Construcción" && (
                <>
                  <Link href="/acerolatina" className="font-bold">
                    Acerolatina
                  </Link>
                  <Link href="/simpletech" className="font-bold">
                    Simpletech
                  </Link>
                  <Link href="/proyectos/proyectos-vitivinicolas">
                    Proyectos Vitivinícolas
                  </Link>
                  <Link href="/proyectos/proyectos-comerciales">
                    Proyectos Comerciales
                  </Link>
                  <Link href="/proyectos/proyectos-residenciales">
                    Proyectos Residenciales
                  </Link>
                </>
              )}
              {activeCategory === "Refrigeración" && (
                <>
                  <Link href="/friolatina" className="font-bold">
                    Friolatina
                  </Link>
                  <Link href="/bervill" className="font-bold">
                    Bervill
                  </Link>
                  <Link href="/productos/refrigeracion/camaras-frigorificas">
                    Cámaras Frigoríficas
                  </Link>
                  <Link href="/proyectos/proyectos-industriales">
                    Proyectos Industriales
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </menu>
  );
};

export default Navbar;
