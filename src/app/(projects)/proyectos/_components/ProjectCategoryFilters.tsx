import toSlug from "@/lib/toSlug";
import type { Category } from "../projects";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProyectCategoryFilters = ({ categories }: { categories: Category[] }) => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <nav className="h-full pb-8">
      <ul className="flex h-full justify-between gap-12">
        <li className="flex flex-col gap-4">
          <Link
            href={"/proyectos"}
            className={`whitespace-nowrap font-medium text-white ${
              pathname === "/proyectos" &&
              "underline decoration-white underline-offset-8"
            }`}
          >
            Todos los Proyectos
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category} className="flex flex-col gap-4">
            <Link
              href={`/proyectos/${toSlug(category)}`}
              className={`whitespace-nowrap font-medium text-white ${
                pathname === "/proyectos/" + toSlug(category) &&
                "underline decoration-white underline-offset-8"
              }`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProyectCategoryFilters;
