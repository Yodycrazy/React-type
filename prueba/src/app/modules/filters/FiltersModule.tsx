import React from "react";
import { Category } from "../../interfaces/Categories.interface";
import SearchBar from "../../components/filters/SearchBar";



interface FiltersModuleProps {
  categories: Category[];
  onSearch: (filters: {
    title?: string;
    price?: number;
    minPrice?: number;
    maxPrice?: number;
    categoryId?: number;
  }) => void;
  onReset: () => void;
}

const FiltersModule: React.FC<FiltersModuleProps> = ({ categories, onSearch, onReset }) => {
  return (
    <div>
      <h3>Filtros</h3>
      <SearchBar categories={categories} onSearch={onSearch} onReset={onReset} />
    </div>
  );
};

export default FiltersModule;