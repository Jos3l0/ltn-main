import TypeWriter from "@/app/_animations/TypeWriter";
import Image from "next/image";
import React from "react";

const InstitutionalSection = () => {
  return (
    <section
      className="relative mx-auto w-full max-w-[1200px] px-4 py-12"
      id="grupo-ltn"
    >
      <div className="flex flex-col gap-4">
        <span className="text-gray-400 text-sm">SOBRE EL GRUPO LTN</span>
        <TypeWriter
          text="Una historia de éxito, una visión hacia el futuro"
          className="text-4xl"
          delay={1}
        />
      </div>
      <div className="flex flex-col content-center items-center justify-center gap-12 pt-12 md:flex-row md:px-8">
        <div className="relative flex min-h-96 w-full flex-1 justify-center gap-4">
          <div className="relative mb-24 aspect-[2/3] max-w-60 flex-1">
            <Image
              src="/images/history-ltn-1.png"
              alt="Instalaciones de Friolatina"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative mt-24 aspect-[2/3] max-w-60 flex-1">
            <Image
              src="/images/history-ltn-2.png"
              alt="Cadena de montaje de Friolatina"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <p>
            Desde sus comienzos hace más de 50 años, Grupo LTN ha crecido más
            allá de sus expectativas iniciales.
          </p>
          <p>
            En 1993, con el lanzamiento de Bervill, y más tarde con Friolatina,
            Acerolatina y Simpletech, el grupo no sólo logró diversificar su
            cartera, sino que también redefinió lo que significa ofrecer
            soluciones integrales y eficientes.
          </p>
          <p>
            Cada paso adelante ha sido un testimonio de su adaptabilidad y su
            constante búsqueda de la excelencia.
          </p>
          {/* <Button className="p-4">Conoce más</Button> */}
        </div>
      </div>
    </section>
  );
};

export default InstitutionalSection;
