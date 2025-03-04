import React from "react";
import Grid from "@mui/material/Grid2";
import MultiActionCard from "../../components/cards/MultiActionCard";
import { Category } from "../../interfaces/Categories.interface";

const CategoryGrid: React.FC<{ categories: Category[] }> = ({ categories }) => {
  const handlerButton = () => {
    alert("funcionaaaa");
  };

  return (
    <Grid container spacing={2} columns={24}>
      {categories.map((category, index) => (
        <Grid key={category.id || index} size="grow">
          <MultiActionCard
            item={category}
            valueButton="ver categorias"
            onAction={handlerButton}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryGrid;