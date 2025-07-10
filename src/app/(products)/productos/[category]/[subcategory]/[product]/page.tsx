import { products } from "../../../products";
import toSlug from "@/lib/toSlug";

interface Params {
  category: string;
  subcategory: string;
  product: string;
}

export default function ProductPage({ params }: { params: Params }) {
  const { category, subcategory, product } = params;

  const found = products.find(
    (p) =>
      toSlug(p.category) === category &&
      toSlug(p.subcategory) === subcategory &&
      toSlug(p.title) === product
  );

  if (!found) return <div>Producto no encontrado</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{found.title}</h1>
      <p className="mb-4">{found.description}</p>
      {/* Aquí puedes renderizar el resto de la info del producto */}
    </div>
  );
}