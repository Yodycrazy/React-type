import React from "react";
import { useParams } from "react-router-dom"; 
import useProductFilters from "../../hooks/useProductFilters";
import FiltersMenu from "../../components/filters/FiltersMenu";
import LoadingErrorHandler from "../../components/shared/LoadingErrorHandler";
import ProductGrid from "./ProductGrid";
import { useCategories } from "../../hooks/useCategories";
import { useProducts } from "../../hooks/useProducts";
import { Typography } from "@mui/material";

/**
 * Componente que muestra la lista de productos.
 * Permite filtrar productos por categoría, título y rango de precios.
 * 
 * @component
 * @returns {JSX.Element} Página con la lista de productos y filtros.
 */
const ProductList = () => {
  const { id: categoryId } = useParams<{ id: string }>(); 

  // Obtiene las categorías y productos mediante hooks personalizados
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();
  const { products, loading: productsLoading, error: productsError } = useProducts();
  const { filteredProducts, loading, error, noResultsMessage, handleApplyFilters, handleResetFilters } = useProductFilters(categories);

  /**
   * Resetea los filtros al cargar los productos.
   */
  React.useEffect(() => {
    if (products.length > 0) {
      handleResetFilters();
    }
  }, products);

  // Filtra los productos según la categoría seleccionada
  const productsToDisplay = categoryId
    ? filteredProducts.filter(product => product.categoryId === Number(categoryId))
    : filteredProducts;

  console.log("categoryId:", categoryId);
  console.log("filteredProducts:", filteredProducts);
  console.log("productsToDisplay:", productsToDisplay);

  // Manejo de estados de carga y errores
  if (categoriesLoading || productsLoading) return <p>Loading...</p>;
  if (categoriesError) return <p>Error loading categories: {categoriesError}</p>;
  if (productsError) return <p>Error loading products: {productsError}</p>;

  return (
    <>
      <Typography variant="h3" component="h2" sx={{ pt: 2, color: "white" }}>Productos</Typography>
      <Typography variant="h4" component="h3" sx={{ pb: 2, color: "white" }}>Escoge entre cientos de productos...</Typography>
      <FiltersMenu
        categories={categories}
        onSearch={handleApplyFilters}
        onReset={handleResetFilters}
      />
      <LoadingErrorHandler loading={loading} error={error} noResultsMessage={noResultsMessage} />
      <ProductGrid products={productsToDisplay} />
    </>
  );
};

export default ProductList;
