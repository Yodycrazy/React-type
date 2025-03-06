import React from "react";
import { useParams } from "react-router-dom"; 
import useProductFilters from "../../hooks/useProductFilters";
import FiltersMenu from "../../components/filters/FiltersMenu";
import LoadingErrorHandler from "../../components/shared/LoadingErrorHandler";
import ProductGrid from "./ProductGrid";
import { useCategories } from "../../hooks/useCategories";
import ProductForm from "../../components/form/ProductForm";
import { useProducts } from "../../hooks/useProducts";


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