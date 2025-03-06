import React from "react";
import { Category } from "../../../interfaces/Categories.interface";

interface CategorySelectorProps {
  categories: Category[];
  selectedCategoryId: number | undefined;
  onCategoryChange: (categoryId: number | undefined) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategoryId,
  onCategoryChange,
}) => {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom:"8ppx"}}>
    <select
      value={selectedCategoryId || ""}
      onChange={(e) => onCategoryChange(Number(e.target.value))}
    >
      <option value="">Todas las categorías</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
    </div>
  );
};

export default CategorySelector;