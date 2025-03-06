import React from "react";
import { useCategories } from "../../hooks/useCategories";
import ProductForm from "../../components/form/ProductForm";



const ProductCreate = () => {
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();

  if (categoriesLoading) return <p>Loading categories...</p>;
  if (categoriesError) return <p>Error loading categories: {categoriesError}</p>;

  return (
    <>
      <ProductForm categories={categories}  /> 
    </>
  );
};

export default ProductCreate;