import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared_components/Carousel";

const testimonials = [
  {
    image: "/images/testimonials/GuillermoAvacaCedisur.jpg",
    text: "“Hace 20 años elegimos a Grupo LTN a través de un representante regional. Hemos realizado con el Grupo muchas inversiones a través del tiempo, desde equipos de refrigeración, cámaras frigoríficas y obras llave en mano. El principal atributo es la confianza que nos generaron de recibir propuestas acordes a cada etapa de nuestro camino de crecimiento. Son verdaderos socios estratégicos y amigos en todo nuestro recorrido juntos.”",
    name: "Guillermo Avaca",
    jobPosition: "Gerente General en Cedisur",
  },
  {
    image: "/images/testimonials/PedroDuhalde.jpg",
    text: "“Grupo LTN es un proveedor local con mucha trayectoria. Con ellos realizamos el revestimiento con paneles de poliuretano y la refrigeración para almacenes verticales automáticos que fabricamos en Bs As, los cuales fueron adquiridos por Bayer Argentina. Recomendamos a Grupo LTN permanentemente cada vez que visitamos empresas logísticas con necesidades de refrigeración.”",
    name: "Pedro Duhalde",
    jobPosition: "Gerente General en DH Systems",
  },
  {
    image: "/images/testimonials/RonnieDick.jpeg",
    text: "“Estamos complacidos con la posibilidad de incorporar sus productos innovadores de alta calidad. FooilRoof ayuda a reducir el consumo energético haciendo que los hogares de nuestros clientes sean más eficientes y confortables.”",
    name: "Ronnie Dick",
    jobPosition: "Director de Dick Hous",
  },
  {
    image: "/images/testimonials/ArielGagliano.jpg",
    text: "“Grupo LTN, no solo son importantes y excelentes proveedores con los cuales hace más de 20 años que venimos trabajando, que generará en sus equipos profesionales, una relación de trabajo que facilita las obras. Muy agradecidos de tenernos en cuenta y que sigan por el sendero que marcó el amigo Cacho Bernardi. Elegimos a Grupo LTN para la fabricación de nuestros primeros girofreezers porque era el único proveedor en el país que fabricaba el modelo de panel frigorífico que se adaptó perfectamente a nuestros requisitos y los de nuestros clientes.”",
    name: "Ariel Gagliano",
    jobPosition: "Gerente en Don Yeyo SA",
  },
  {
    image: "/images/testimonials/Marimari.jpeg",
    text: "“Grupo LTN es para nosotros una empresa proveedora de primera línea en construcción de paneles, no solo por la calidad de su producto final, sino también por la calidad de atención y respuesta a nuestros requerimientos.”",
    name: "Arnaldo Hubaide",
    jobPosition: "Gerente Comercial en Marimari Modular",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative w-full bg-[url('/images/bg-testimonials.png')] bg-cover bg-[25%_center]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] flex-col lg:flex-row">
        <div className="max-w-[25rem] space-y-5 p-8 md:bottom-4 md:top-auto md:content-center">
          <h4 className="text-4xl text-white">Comprometidos con la calidad</h4>
          <p className="text-white" style={{ textShadow: "0 0 4px black" }}>
            Y así lo avalan nuestros clientes, una amplia base que abarca tanto
            el sector privado como el estatal, respaldando la excelencia de
            nuestro trabajo
          </p>
        </div>
        <div className="z-30 mt-12 mx-auto flex h-1/2 items-end lg:right-0 lg:h-full lg:w-1/2 lg:items-center">
          <div className="bottom-0 h-fit max-w-full bg-black/20 backdrop-blur-lg lg:bg-transparent lg:backdrop-blur-none">
            {/* bg-black/20 backdrop-blur-lg */}
            <Carousel
              opts={{
                align: "center",
                loop: true,
                containScroll: "trimSnaps",
              }}
              className="m-auto h-fit w-full lg:overflow-x-hidden"
            >
              <CarouselContent className="flex h-fit">
                {testimonials.map((tes) => (
                  <CarouselItem
                    className={
                      "relative min-w-full max-w-full basis-0 lg:mt-0 lg:px-20"
                    }
                    key={tes.name}
                  >
                    <div className="absolute h-full w-full items-center lg:flex">
                      <Image
                        src={tes.image}
                        alt={tes.name}
                        width={100}
                        height={100}
                        className="absolute z-10 h-24 -translate-y-1/2 rounded-full object-cover lg:w-24 lg:-translate-x-8 lg:translate-y-0"
                        // md:translate-0 absolute left-4 top-0 -translate-y-1/2 rounded-full md:left-0 md:top-0
                      />
                    </div>
                    <div className="pb-8 lg:bg-black/20 lg:p-12 lg:pl-20 lg:backdrop-blur-lg px-4 w-screen lg:w-auto">
                      <p className="mb-4 mt-16 text-white lg:mt-4">
                        {tes.text}
                      </p>
                      {/* mb-4 mt-16 */}
                      <div className="mb-4 h-px w-24 bg-white opacity-50" />
                      {/* mb-4 */}
                      <span className="block font-semibold text-white">
                        {tes.name}
                      </span>
                      <span className="text-sm text-white">
                        {tes.jobPosition}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselDots />
              <CarouselPrevious
                className="-left-0 brightness-0 invert hidden lg:block"
                variant={"icon"}
              />
              <CarouselNext
                className="right-8 brightness-0 invert hidden lg:block"
                variant={"icon"}
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
