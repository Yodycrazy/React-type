import React from "react";
import { FiltersProps } from "../../interfaces/Filters.interface";
import SearchBar from "./SearchBar";

const FiltersMenu: React.FC<FiltersProps> = ({ categories, onSearch, onReset }) => {
  return (
    <div>
      <h3>Filtros</h3>
      <SearchBar categories={categories} onSearch={onSearch} onReset={onReset} />
    </div>
  );
};

export default FiltersMenu;