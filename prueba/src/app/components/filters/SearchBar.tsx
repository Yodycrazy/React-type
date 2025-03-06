import React from "react";
import TitleSearch from "./search/TitleSearch";
import PriceFilter from "./search/PriceFilter";
import CategorySelector from "./search/CategorySelector";
import { Filters } from "../../interfaces/Filters.interface";
import { Category } from "../../interfaces/Categories.interface";
import useFilters from "../../hooks/useFilters";

interface SearchBarProps {
  categories: Category[];
  onSearch: (filters: Filters) => void;
  onReset: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ categories, onSearch, onReset }) => {
  const { filters, updateFilters, resetFilters } = useFilters();

  const handleSearch = () => {
    onSearch(filters);
  };

  const handleReset = () => {
    resetFilters();
    onReset();
  };

  return (
    <div style={{ display: "flex",justifyContent:"center", flexDirection: "column", gap: "12px", alignContent: "center"}}>
      <TitleSearch
        title={filters.title || ""}
        onTitleChange={(title) => updateFilters({ title })}
        onSearch={handleSearch}
        onReset={handleReset}
      />
      <PriceFilter
        price={filters.price}
        minPrice={filters.minPrice}
        maxPrice={filters.maxPrice}
        onPriceChange={(price) => updateFilters({ price })}
        onMinPriceChange={(minPrice) => updateFilters({ minPrice })}
        onMaxPriceChange={(maxPrice) => updateFilters({ maxPrice })}
      />
      <CategorySelector
        categories={categories}
        selectedCategoryId={filters.categoryId}
        onCategoryChange={(categoryId) => updateFilters({ categoryId })}
      />
    </div>
  );
};

export default SearchBar;