import React from "react";
import Grid from "@mui/material/Grid2";
import MultiActionCard from "../../components/cards/MultiActionCard";
import { Product } from "../../interfaces/Products.interface";

const ProductGrid: React.FC<{ products: Product[] }> = ({ products }) => {
  const handlerButton = () => {
    alert("funcionaaaa");
  };

  return (
    <Grid container spacing={2} columns={16}>
      {products.map((product) => (
        <Grid key={product.id} size={{ xs: 6, md: 4 }}> 
          <MultiActionCard
            item={product}
            valueButton="ver producto"
            onAction={handlerButton}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;