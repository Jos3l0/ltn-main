import React from "react";
import ProyectGalleryPage from "../_components/sections/ProyectGalleryPage";
import { projects } from "../projects";

const Page = () => {
  return <ProyectGalleryPage projects={projects} />;
};

export default Page;
