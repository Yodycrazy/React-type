import useCategories from "../../hooks/useCategories";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import MultiActionCard from "../../components/cards/MultiActionCard";
import { Product } from "../../interfaces/Products.interface";
import { productServices } from "../../services/Products.services";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FiltersMenu from "../../components/filters/FiltersMenu";
import { Filters } from "../../interfaces/Filters.interface";

const ProductList = () => {
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [noResultsMessage, setNoResultsMessage] = useState<string | null>(null);

  const handleApplyFilters = async (filters: Filters) => {
    setLoading(true);
    setError(null);
    setNoResultsMessage(null);

    try {
      const products = await productServices.filterProducts({
        title: filters.title,
        price: filters.price,
        price_min: filters.minPrice,
        price_max: filters.maxPrice,
        categoryId: filters.categoryId,
      });

      if (products.length === 0) {
        let message = "No se encontraron productos";
        if (filters.title) message += ` con el título "${filters.title}"`;
        if (filters.categoryId) {
          const category = categories.find((cat) => cat.id === filters.categoryId);
          if (category) message += ` en la categoría "${category.name}"`;
        }
        if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
          message += ` con un precio entre $${filters.minPrice} y $${filters.maxPrice}`;
        }
        message += ".";
        setNoResultsMessage(message);
      } else {
        setNoResultsMessage(null);
      }

      setFilteredProducts(products);
    } catch (err) {
      setError("Error al aplicar los filtros");
    } finally {
      setLoading(false);
    }
  };

  const handleResetFilters = async () => {
    setLoading(true);
    setError(null);
    setNoResultsMessage(null);

    try {
      const products = await productServices.getProducts();
      setFilteredProducts(products);
    } catch (err) {
      setError("Error al reiniciar los filtros");
    } finally {
      setLoading(false);
    }
  };

  if (categoriesLoading) return <p>Loading...</p>;
  if (categoriesError) return <p>{categoriesError}</p>;

  const handlerButton = () => {
    alert("funcionaaaa");
  };

  return (
    <Grid container spacing={2} columns={16}>
      <Grid>
        <FiltersMenu
          categories={categories}
          onSearch={handleApplyFilters} 
          onReset={handleResetFilters} 
        />
      </Grid>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : noResultsMessage ? (
        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "red", marginTop: "16px" }}>
          <ErrorOutlineIcon />
          <p>{noResultsMessage}</p>
        </div>
      ) : (
        filteredProducts.map((product, index) => (
          <Grid key={index} size={{ xs: 6, md: 4 }}>
            <MultiActionCard
              item={product}
              valueButton="ver producto"
              onAction={handlerButton}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default ProductList;