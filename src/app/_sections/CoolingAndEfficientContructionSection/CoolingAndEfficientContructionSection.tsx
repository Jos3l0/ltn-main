import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const Card = ({ src, alt, title, description }: Props) => {
  return (
    <div className="relative max-w-md">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="mb-4 w-full object-cover"
      />
      <h4 className="mb-4 text-2xl font-medium">{title}</h4>
      <p className="mb-4">{description}</p>
      {/* <Button className="p-4">Conoce más</Button> */}
    </div>
  );
};

const CoolingAndEfficientContructionSection = () => {
  return (
    <section className="w-full px-4 py-8">
      <h2 className="limit mb-8 font-semibold">
        Refrigeración y construcción eficiente
      </h2>
      <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
        <Card
          src={"/images/refrigeracion.png"}
          alt={"Refrigeriación"}
          title={"Adéntrate en el mundo de la refrigeración"}
          description={
            "La conservación efectiva de tus productos es nuestra prioridad número uno. Ya seas un pequeño comercio buscando mantener la frescura de tus productos o una gran empresa agrícola, nuestro equipo está aquí para ayudarte a proteger lo que más valoras."
          }
        />
        <Card
          src={"/images/construccion.png"}
          alt={"Construcción"}
          title={"Empieza a construir de forma más sostenible"}
          description={
            "Desde revestimientos de alta calidad hasta tecnologías innovadoras para tus proyectos arquitectónicos, nuestro objetivo es ayudarte a crear espacios que no solo sean funcionales, sino también estéticamente sean atractivos y respetuosos con el medio ambiente."
          }
        />
      </div>
    </section>
  );
};

export default CoolingAndEfficientContructionSection;
