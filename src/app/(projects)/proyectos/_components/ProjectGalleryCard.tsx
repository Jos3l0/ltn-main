import React from "react";
import type { Project } from "../projects";
import Image from "next/image";

interface Props {
  proyect: Project;
  handleProyectClick: (proyect: Project) => void;
}

const ProyectGalleryCard = ({ proyect, handleProyectClick }: Props) => {
  return (
    <li
      key={proyect.title}
      onClick={() => handleProyectClick(proyect)}
      className="h-fit cursor-pointer"
    >
      <div className="relative mb-4 aspect-[3/2] h-full w-full max-w-[35rem] border-[1px] border-lightgray">
        <Image
          src={proyect.imagePath}
          alt="Image"
          fill
          className="object-fill"
          // className="object-cover"
        />
      </div>
      <h4 className="font-medium md:pl-8">{proyect.title}</h4>
    </li>
  );
};

export default ProyectGalleryCard;
