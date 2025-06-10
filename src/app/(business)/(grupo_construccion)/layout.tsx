"use client";

import React, { useEffect } from "react";
import ContactSection from "@/app/_sections/ContactSection/ContactSection";
import { InnovativeAndEfficientProjectsSection } from "@/app/_sections";
import type { ProjectItem } from "@/app/_components/ProjectsCarousel/ProjectsCarousel";
import NewsletterSection from "@/app/_sections/NewsletterSection/NewsletterSection";
import HeroUnitSection from "../_components/sections/HeroUnitSection/HeroUnitSection";
import ConstructionSolutionSection from "./_components/ConstructionSolutionSection/ConstructionSolutionSection";
import ConstructionProductsSection from "./_components/ConstructionProductsSection/ConstructionProductsSection";
import ConstructionBenefitsSection from "./_components/ConstructionBenefitsSection/ConstructionBenefitsSection";
import HelpSection from "../_components/sections/HelpSection/HelpSection";
import type { InfoItem } from "../_components/sections/HelpSection/HelpSection";
import { usePathname } from "next/navigation";
import Animate from "@/app/_animations/Animate";

const projects: ProjectItem[] = [
  {
    src: "/images/projects/Cofarmen/cofarmen.jpg",
    alt: "Línea Comercial",
    title: "Línea Comercial",
    description:
      "Participamos de la construcción de la cámara de frío más grande del país, totalmente robotizada y de una producción aprox. de 75 millones de kilogramos anuales. La misma, contempla 30m. de ancho, 36m. de alto y 90m. de largo. Nuestros paneles equiparon: almacén (revestimiento y cerramiento) y sala de máquinas.",
    href: "/proyectos-comerciales",
  },
  {
    src: "/images/projects/Nini_mayorista/DJI_0011.jpg",
    alt: "Línea Industrial",
    title: "Línea Industrial",
    description:
      "Nuestros paneles aislantes térmicos – acústicos fueron partícipes de la edificación del predio de Congelados Centro, empresa con más de 30 años de experiencia, se especializa en el almacenamiento, distribución y logística de productos congelados y refrigerados. Participamos en la instalación de tres cámaras frigoríficas de distintas medidas, incluyendo equipamiento, puertas y accesorios, con un total de 18.700 metros cuadrados.",
    href: "/proyectos-industriales",
  },
  {
    src: "/images/projects/Cabana_yacanto/yacanto.jpg",
    alt: "Proyecto Residencial",
    title: "Proyecto Residencial",
    description:
      "Nos involucramos en la colocación de cámaras internas de baja y media temperatura, con cerramiento de paneles aislantes para Café América ubicado en la provincia de San Juan. Aprovechando así, las propiedades físicas aislantes y térmicas, sumando eficiencia energética.",
    href: "/proyectos-residenciales",
  },
];

const info: InfoItem[] = [
  {
    title: "Documentación Técnica",
    description:
      "Explora nuestra sección de documentación técnica para arquitectos, constructores e ingenieros.",
    btn: "Ir a documentación técnica",
    action: "/productos",
  },
  {
    title: "Escuela de Montajistas",
    description:
      "Conocé sobre los programas de formación de la mano de Simpletech.",
    btn: "Quiero saber más",
    action:
      "https://forms.office.com/pages/responsepage.aspx?id=8k4h6o93OkCl1en1oVvHY0sic70WhdRLnAbZHxS0TzVUQ1laRzlGQ1dJV1RJVVBENDNKWVlKOVNWNi4u&route=shorturl",
  },
  {
    title: "Ciclos de Capacitaciones",
    description:
      "Entérate de las charlas para profesionales de la construcción en todo el país.",
    btn: "Quiero saber más",
    action:
      "https://forms.office.com/pages/responsepage.aspx?id=8k4h6o93OkCl1en1oVvHY0sic70WhdRLnAbZHxS0TzVUQ1laRzlGQ1dJV1RJVVBENDNKWVlKOVNWNi4u&route=shorturl",
  },
];

const BusinessPage = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Animate>
        <HeroUnitSection />
      </Animate>
      <Animate direction="right">
        <ConstructionSolutionSection />
      </Animate>
      <ConstructionProductsSection />
      <ConstructionBenefitsSection />
      <InnovativeAndEfficientProjectsSection
        title="Proyectos industriales y residenciales"
        projects={projects}
      />
      <HelpSection title="¿Necesitas más información?" info={info} />
      <NewsletterSection />
      <ContactSection />
    </div>
  );
};

export default BusinessPage;
