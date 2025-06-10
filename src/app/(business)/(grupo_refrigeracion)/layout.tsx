"use client";

import React, { useEffect } from "react";
import ContactSection from "@/app/_sections/ContactSection/ContactSection";
import { InnovativeAndEfficientProjectsSection } from "@/app/_sections";
import type { ProjectItem } from "@/app/_components/ProjectsCarousel/ProjectsCarousel";
import NewsletterSection from "@/app/_sections/NewsletterSection/NewsletterSection";
import HeroUnitSection from "../_components/sections/HeroUnitSection/HeroUnitSection";
import RefrigerationSolutionSection from "./_components/RefrigerationSolutionSection/RefrigerationSolutionSection";
import RefrigeriacionProductsSection from "./_components/RefrigeriacionProductsSection/RefrigeriacionProductsSection";
import RefrigerationBenefitsSection from "./_components/RefrigerationBenefitsSection/RefrigerationBenefitsSection";
import HelpSection from "../_components/sections/HelpSection/HelpSection";
import type { InfoItem } from "../_components/sections/HelpSection/HelpSection";
import { usePathname } from "next/navigation";
import Animate from "@/app/_animations/Animate";

const projects: ProjectItem[] = [
  {
    src: "/images/friolatina/projects/helacor.png",
    alt: "Grido Helacor",
    title: "Grido Helacor",
    description:
      "Participamos de la construcción de la cámara de frío más grande del país, totalmente robotizada y de una producción aprox. de 75 millones de kilogramos anuales. La misma, contempla 30m. de ancho, 36m. de alto y 90m. de largo. Nuestros paneles equiparon: almacén (revestimiento y cerramiento) y sala de máquinas.",
    href: "/proyectos-industriales",
  },
  {
    src: "/images/friolatina/projects/congelados.png",
    alt: "Congelados Centro",
    title: "Congelados Centro",
    description:
      "Nuestros paneles aislantes térmicos – acústicos fueron partícipes de la edificación del predio de Congelados Centro, empresa con más de 30 años de experiencia, se especializa en el almacenamiento, distribución y logística de productos congelados y refrigerados. Participamos en la instalación de tres cámaras frigoríficas de distintas medidas, incluyendo equipamiento, puertas y accesorios, con un total de 18.700 metros cuadrados.",
    href: "/proyectos-industriales",
  },
  {
    src: "/images/friolatina/projects/cafe.png",
    alt: "Café América",
    title: "Café América",
    description:
      "Nos involucramos en la colocación de cámaras internas de baja y media temperatura, con cerramiento de paneles aislantes para Café América ubicado en la provincia de San Juan. Aprovechando así, las propiedades físicas aislantes y térmicas, sumando eficiencia energética.",
    href: "/proyectos-industriales",
  },
];

const info: InfoItem[] = [
  {
    title: "¿Necesitas más información?",
    description:
      "Explora nuestra sección de documentación técnica para arquitectos, constructores e ingenieros.",
    btn: "Ir a documentación técnica",
    action: "/productos/refrigeracion/camaras-frigorificas",
  },
  {
    title: "¿Necesitas ayuda inmediata?",
    description:
      "Comunícate con nuestro equipo de servicio técnico post venta en el 0810-122-4422 ¡Es Gratis!",
    btn: "Llamar al equipo de servicio técnico",
    action: "tel:+08101224422",
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
        <RefrigerationSolutionSection />
      </Animate>
      <RefrigeriacionProductsSection />
      <RefrigerationBenefitsSection />
      <InnovativeAndEfficientProjectsSection
        title="Proyectos innovadores y eficientes"
        projects={projects}
      />
      {/* <AllySection /> */}
      <HelpSection info={info} />
      <NewsletterSection />
      <ContactSection />
    </div>
  );
};

export default BusinessPage;
