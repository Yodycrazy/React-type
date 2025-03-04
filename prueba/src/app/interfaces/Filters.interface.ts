import { Category } from "./Categories.interface";

// Interfaz para la estructura de los filtros
export interface Filters {
  title?: string;
  price?: number;
  minPrice?: number;
  maxPrice?: number;
  categoryId?: number;
}

// Interfaz para las propiedades comunes de los componentes que manejan filtros
export interface FiltersProps {
  categories: Category[];
  onSearch: (filters: Filters) => void;
  onReset: () => void;
}