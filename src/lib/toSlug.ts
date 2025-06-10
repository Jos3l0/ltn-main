const toSlug = (str: string): string => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remover acentos
    .replace(/&/g, "and") // Reemplazar "&" con "and"
    .replace(/\s+/g, "-") // Reemplazar espacios con guiones
    .replace(/[^a-z0-9-]/g, ""); // Remover caracteres no permitidos en URLs
};

export default toSlug;
