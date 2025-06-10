import type { Categories } from "../products";
import useIsDesktop from "@/hooks/useIsDesktop";
import FiltersModal from "./FiltersModal";
import CategoryFilters from "./CategoryFilters";

const Filters = ({ categories }: { categories: Categories }) => {
  const isDesktop = useIsDesktop();

  return (
    <div>
      <div className="mb-4 flex gap-4">
        {/* <Input className="w-full" placeholder="Buscar" variant="lined" /> */}
        {!isDesktop && <FiltersModal categories={categories} />}
      </div>
      {isDesktop && (
        <div>
          <CategoryFilters categories={categories} />
        </div>
      )}
    </div>
  );
};

export default Filters;
