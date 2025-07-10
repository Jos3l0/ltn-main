"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared_components/Carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

// Array de slides con imagen, título, subtítulo y botón
const slides = [
  {
    src: "/images/heros/hero1.jpg",
    title: "Aislá mejor.\nConstruí más rápido.\nAhorra energía.",
    subtitle: "Elegí paneles que hacen la diferencia.",
    button: { text: "Conocé más", link: "#" },
  },
  {
    src: "/images/heros/hero2.jpg",
    title: "Paneles aislantes para cada proyecto,\ndesde casas hasta la industrias.",
    subtitle: "Hablemos de tu próximo proyecto",
    button: { text: "Hablemos", link: "#" },
  },
  {
    src: "/images/heros/hero3.jpg",
    title: "Construí tu industria más rápido \nmás limpio y con menor consumo",
    subtitle: "Paneles aislantes para estructuras.V",
    button: { text: "Conocé más", link: "#" },
  },
    {
    src: "/images/heros/hero4.jpg",
    title: "Aislamiento eficiente,\nConstrucción inteligente",
    subtitle: "Solicitá tu cotización hoy mismo.",
    button: { text: "Cotizá", link: "#" },
  },
  {
    src: "/images/heros/hero5.jpg",
    title: "Tu producción no puede parar.\nLa temperatura tampoco.",
    subtitle: "Aislación eficiente para industrias que exigen.",
    button: { text: "Conocé más", link: "#" },
  },
  {
    src: "/images/heros/hero6.jpg",
    title: "Construcción inteligente.\ncon paneles sustentables.",
    subtitle: "Solicitá tu cotización hoy mismo.",
    button: { text: "Cotizá", link: "#" },
  },
    {
    src: "/images/heros/hero7.jpg",
    title: "Aislá tu industria del calor,\ndel frío y del gasto energético.",
    subtitle: "Soluciones sostenibles para proyectos.",
    button: { text: "Conocé más", link: "#" },
  },
  // Agrega más slides según necesites...
];

export const HeroCarousel = () => {
  return (
    <div className="relative h-full w-full">
      <Carousel
        className="h-full w-full"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 6000, stopOnInteraction: false })]}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-screen">
              <Image
                src={slide.src}
                alt={`Hero Image ${index + 1}`}
                fill
                className="h-full w-full object-cover"
                priority={index === 0}
              />
              {/* Texto y botón superpuestos */}
              <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-24 h-full">
                <h1 className="text-2xl md:text-5xl font-bold mb-2 whitespace-pre-line text-white drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl mb-6 text-white drop-shadow-lg">
                  {slide.subtitle}
                </p>
                <div className="w-full flex justify-end">
                  <a
                    href={slide.button.link}
                    className="bg-white text-black px-6 py-2 shadow hover:bg-gray-100 transition rounded-none font-semibold"
                  >
                    {slide.button.text}
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};