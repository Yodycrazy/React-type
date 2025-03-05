import React from "react";
import useProductFilters from "../../hooks/useProductFilters";
import FiltersMenu from "../../components/filters/FiltersMenu";
import LoadingErrorHandler from "../../components/shared/LoadingErrorHandler";
import ProductGrid from "./ProductGrid";
import { useCategories } from "../../hooks/useCategories";
import ProductForm from "../../components/form/ProductForm";


const ProductList = () => {
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();
  const { filteredProducts, loading, error, noResultsMessage, handleApplyFilters, handleResetFilters } = useProductFilters(categories);

  const handleProductAdded = () => {
    handleResetFilters(); 
  };

  if (categoriesLoading) return <p>Loading categories...</p>;
  if (categoriesError) return <p>Error loading categories: {categoriesError}</p>;

  return (
    <>
      <h2>Añadir Nuevo Producto</h2>
      <ProductForm categories={categories} onProductAdded={handleProductAdded} /> 
      <FiltersMenu
        categories={categories}
        onSearch={handleApplyFilters}
        onReset={handleResetFilters}
      />
      <LoadingErrorHandler loading={loading} error={error} noResultsMessage={noResultsMessage} />
      <ProductGrid products={filteredProducts} />
    </>
  );
};

export default ProductList;