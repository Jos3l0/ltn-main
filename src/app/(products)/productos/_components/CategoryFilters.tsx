import toSlug from "@/lib/toSlug";
import type { Categories } from "../products";

const CategoryFilters = ({ categories }: { categories: Categories }) => (
  <nav className="h-full">
    <ul className="flex h-full w-72 flex-col justify-between gap-12">
      {Object.entries(categories).map(([category, subcategories]) => (
        <li key={category} className="flex flex-col gap-4">
          <a
            href={`/productos/${toSlug(category)}`}
            className="text-xl font-medium"
          >
            {category}
          </a>
          <ul className="flex flex-1 flex-col gap-6">
            {subcategories.map((niceFormat) => {
              const slug = toSlug(niceFormat); // Generar `slug` dinámicamente
              return (
                <li key={slug}>
                  <a href={`/productos/${toSlug(category)}/${slug}`}>
                    {niceFormat}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
  </nav>
);

export default CategoryFilters;
