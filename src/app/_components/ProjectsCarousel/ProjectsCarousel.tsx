import Animate from "@/app/_animations/Animate";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/shared_components/Carousel";
import Image from "next/image";
import Link from "next/link";

export interface ProjectItem {
  src: string;
  alt: string;
  title: string;
  description: string;
  href: string;
}

interface Props {
  src: string;
  alt: string;
  title: string;
  description: string;
  href: string;
}

const ProjectItem = ({ src, alt, title, description, href }: Props) => {
  return (
    <Link href={`/proyectos/${href}`}>
      <Image
        src={src}
        alt={alt}
        width={335}
        height={528}
        className="mx-auto mb-4 min-h-56 object-cover"
      />
      <div className="space-y-4 px-6">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="">{description}</p>
        {/* <Button variant={"link"}>Leer más</Button> */}
      </div>
    </Link>
  );
};

export const ProjectsCarousel = ({ projects }: { projects: ProjectItem[] }) => {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        containScroll: "trimSnaps",
      }}
      className="m-auto w-full"
    >
      <Animate type="fade" direction="left">
        <CarouselContent className="flex lg:justify-center">
          {projects.map((proj) => (
            <CarouselItem
              className={"min-w-[22rem] basis-0 px-0"}
              key={proj.title}
            >
              <ProjectItem
                src={proj.src}
                alt={proj.alt}
                title={proj.title}
                description={proj.description}
                href={proj.href}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Animate>
      <CarouselDots className="w-full h-[.3rem]" dotColor="bg-black" />
    </Carousel>
  );
};
