import ProyectCategoryFilters from "./ProjectCategoryFilters";
import type { Category } from "../projects";

const Filters = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="">
      <div>
        <ProyectCategoryFilters categories={categories} />
      </div>
    </div>
  );
};

export default Filters;
