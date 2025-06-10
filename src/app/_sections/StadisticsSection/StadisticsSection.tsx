import NumberCounter from "@/app/_animations/NumberCounter";
import React from "react";

const data = [
  { number: 6, text: "Millones de metros cuadrados fabricados" },
  { number: 7000, text: "Clientes satisfechos en todo LATAM" },
  { number: 10, text: "Son los países a los que exportamos" },
  { number: 5, text: "Plantas industriales y continuamos creciendo" },
];

const StadisticsSection = () => {
  return (
    <section className="flex w-full items-center justify-center bg-black px-8 py-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-12 text-center lg:grid-cols-4">
        {data.map((d) => (
          <div
            key={d.text}
            className="flex max-w-56 flex-col items-start gap-4"
          >
            +
            <NumberCounter
              end={d.number}
              className="text-5xl text-blue"
              delay={100}
            />
            <p className="text-left text-white">{d.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StadisticsSection;
