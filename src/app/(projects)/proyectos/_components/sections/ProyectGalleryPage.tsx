"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import toSlug from "@/lib/toSlug";
import { proyectCategories, type Project } from "../../projects";
import ProyectGallery from "../ProjectGallery";
import ProyectModal from "../ProjectModal";
import ProyectCategoryFilters from "../ProjectCategoryFilters";

const convertString = (str: string) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_");
};

const ProyectGalleryPage = ({ projects }: { projects: Project[] }) => {
  const params = useParams();

  const category = params.category ?? null;

  // Filtrar proyectos directamente basados en la categoría y subcategoría
  const filteredProjects = projects.filter((proyect) => {
    const isCategoryMatch = category
      ? convertString(toSlug(proyect.category)) === category
      : true;
    return isCategoryMatch;
  });

  // Estado para el proyecto seleccionado
  const [selectedProyect, setSelectedProyect] = useState<Project | null>(null);

  const handleProyectClick = (proyect: Project) => {
    setSelectedProyect(proyect); // Establece el proyecto seleccionado
  };

  const closeModal = () => setSelectedProyect(null); // Cierra el modal

  return (
    <section className="mb-8 w-full">
      <div className="mb-12 flex flex-col justify-between bg-black pt-12">
        <div className="max-w-limit px-4 lg:mx-auto lg:w-[1200px]">
          <h2 className="mb-4 text-white">Nuestros proyectos</h2>
          <div className="overflow-x-scroll">
            <ProyectCategoryFilters categories={proyectCategories} />
          </div>
        </div>
        <ProyectModal
          selectedProyect={selectedProyect}
          closeModal={closeModal}
        />
      </div>
      <ProyectGallery
        filteredProjects={filteredProjects}
        handleProyectClick={handleProyectClick}
      />
    </section>
  );
};

export default ProyectGalleryPage;
