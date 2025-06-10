import React from "react";
import type { Project } from "../projects";
import ProyectGalleryCard from "./ProjectGalleryCard";

interface Props {
  filteredProjects: Project[];
  handleProyectClick: (proyect: Project) => void;
}

const ProyectGallery = ({ filteredProjects, handleProyectClick }: Props) => {
  return (
    <ul className="limit grid w-full grid-cols-1 justify-center gap-4 p-4 text-center md:grid-cols-2 md:text-left">
      {filteredProjects.map((proyect) => (
        <ProyectGalleryCard
          proyect={proyect}
          handleProyectClick={handleProyectClick}
          key={proyect.title}
        />
      ))}
    </ul>
  );
};

export default ProyectGallery;
