import {
  BrandSliderSection,
  BusinessUnitsSection,
  CoolingAndEfficientContructionSection,
  HeroSection,
  InnovativeAndEfficientProjectsSection,
  InstitutionalSection,
  OurProductsSection,
  SustainabilitySection,
} from "./_sections";
import StadisticsSection from "./_sections/StadisticsSection/StadisticsSection";
import TestimonialsSection from "./_sections/TestimonialsSection/TestimonialsSection";
import ContactSection from "./_sections/ContactSection/ContactSection";
import NewsletterSection from "./_sections/NewsletterSection/NewsletterSection";
import type { ProjectItem } from "./_components/ProjectsCarousel/ProjectsCarousel";
import Animate from "./_animations/Animate";

const projects: ProjectItem[] = [
  {
    src: "/images/projects/Bodega_casa_de_uco/BODEGA CASA DE UCO.jpg",
    alt: "Proyectos Vitivinícolas",
    title: "Proyectos Vitivinícolas",
    description:
      "Fuimos parte de la creación de una propuesta enoturística innovadora que fusiona el vino, la gastronomía y la región. La bodega, con arquitectura vanguardista, se completó en 2016, marcando una redefinición profunda de la vitivinicultura. El edificio, un 'granero telescópico', se destaca por su diseño, utilizando recursos estéticos mínimos. La estructura incluye una extensa piscina de hormigón de 100 metros de longitud, con una superestructura de hierro y revestimiento de paneles compuestos metálicos de alta aislación térmica.",
    href: "proyectos-vitivinicolas",
  },
  {
    src: "/images/projects/Nini_mayorista/DJI_0011.jpg",
    alt: "Proyectos Industriales",
    title: "Proyectos Industriales",
    description:
      "Intervinimos sus 8100m2 de cerramiento con paneles aislantes arquitectónicos Classwall de alta resistencia estructural. El montaje se realizó con una estructura secundaria para la colocación de revestimiento de altura (entre 12 m2 y 33 m2) cumpliendo con las normas de seguridad existentes. Este complejo de distribución será la segunda boca de ventas de la firma en sus 49 años.",
    href: "proyectos-industriales",
  },
  {
    src: "/images/projects/Cabana_yacanto/yacanto.jpg",
    alt: "Proyectos Residenciales",
    title: "Proyectos Residenciales",
    description:
      "Combinación perfecta de minimalismo y naturaleza. Dos lodges de lujo construidos con paneles Classwall, un revestimiento que equilibra estética y eficiencia energética. En pocas semanas, transformamos 520m² de paneles y cuidada perfilería, en una obra arquitectónica de líneas limpias, integrada en armonía con viñedos y montañas. ",
    href: "proyectos-residenciales",
  },
];

export default async function Home() {
  return (
    <main className="bg-white">
      <Animate>
        <HeroSection />
      </Animate>
      <OurProductsSection />
      <BusinessUnitsSection />
      <Animate direction="left">
        <CoolingAndEfficientContructionSection />
      </Animate>
      <Animate direction="right">
        <InnovativeAndEfficientProjectsSection
          title="Proyectos innovadores y eficientes"
          projects={projects}
        />
      </Animate>
      <Animate direction="down">
        <BrandSliderSection />
      </Animate>
      <Animate type="blur" duration={0.6}>
        <SustainabilitySection />
      </Animate>
      <InstitutionalSection />
      <StadisticsSection />
      <TestimonialsSection />
      <ContactSection />
      <NewsletterSection />
    </main>
  );
}
