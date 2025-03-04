import React from "react";
import { Category } from "../../interfaces/Categories.interface";

interface CategoryFilterProps {
  categories: Category[];
  onSelectCategory: (categoryId: number | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onSelectCategory }) => {
  return (
    <select onChange={(e) => onSelectCategory(e.target.value ? Number(e.target.value) : null)}>
      <option value="">Todas las categorías</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;