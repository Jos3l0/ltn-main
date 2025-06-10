import React from "react";
import type { ProjectItem } from "../../_components/ProjectsCarousel/ProjectsCarousel";
import { ProjectsCarousel } from "../../_components/ProjectsCarousel/ProjectsCarousel";

const InnovativeAndEfficientProjectsSection = ({
  title,
  projects,
}: {
  title: string;
  projects: ProjectItem[];
}) => {
  return (
    <section className="mb-8 w-full px-4">
      <div className="limit mb-24 flex flex-row content-center items-center justify-between pt-12">
        <h2 className="font-semibold">{title}</h2>
        {/* <Button className="hidden px-12 py-4 md:block">
          Explorá todos los proyectos
        </Button> */}
      </div>
      <ProjectsCarousel projects={projects} />
      <div className="px-4 pt-16">
        {/* <Button className="mx-auto block w-full max-w-96 px-12 py-4 md:hidden">
          Explorá todos los proyectos
        </Button> */}
      </div>
    </section>
  );
};

export default InnovativeAndEfficientProjectsSection;
