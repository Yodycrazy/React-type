import React from "react";
import { Category } from "../../interfaces/Categories.interface";
import SearchBar from "../../components/filters/SearchBar";

interface FiltersModuleProps {
  /**
   * Lista de categorías disponibles para el filtrado.
   */
  categories: Category[];

  /**
   * Función que se ejecuta al aplicar los filtros.
   * @param filters - Objeto con los filtros aplicados.
   */
  onSearch: (filters: {
    title?: string;
    price?: number;
    minPrice?: number;
    maxPrice?: number;
    categoryId?: number;
  }) => void;

  /**
   * Función que se ejecuta al restablecer los filtros.
   */
  onReset: () => void;
}

/**
 * Componente que contiene los filtros para buscar productos.
 * Renderiza un título y el componente `SearchBar` con las opciones de filtrado.
 *
 * @component
 * @param {FiltersModuleProps} props - Propiedades del componente.
 * @returns {JSX.Element} Módulo de filtros con barra de búsqueda.
 */
const FiltersModule: React.FC<FiltersModuleProps> = ({ categories, onSearch, onReset }) => {
  return (
    <div>
      <h3>Filtros</h3>
      <SearchBar categories={categories} onSearch={onSearch} onReset={onReset} />
    </div>
  );
};

export default FiltersModule;
