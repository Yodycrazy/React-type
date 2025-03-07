import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { Category } from "../../interfaces/Categories.interface";

interface CategorySelectProps {
  categories: Category[];
  value: number;
  onChange: (e: { target: { name: string; value: any } }) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({ categories, value, onChange }) => {
  return (
    <FormControl fullWidth margin="normal" required>
      <InputLabel>Categoría</InputLabel>
      <Select name="categoryId" value={value} onChange={onChange} label="Categoría">
        <MenuItem value="">Selecciona una categoría</MenuItem>
        {categories.map((cat) => (
          <MenuItem key={cat.id} value={cat.id}>
            {cat.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;