import { useState } from "react";
import { Product } from "../interfaces/Products.interface";
import { productServices } from "../services/Products.services";
import { Filters } from "../interfaces/Filters.interface";
import { Category } from "../interfaces/Categories.interface";

/**
 * Hook personalizado para manejar el filtrado de productos.
 * @param {Category[]} categories - Lista de categorías disponibles.
 * @returns {Object} Estado y funciones del hook.
 * @returns {Product[]} filteredProducts - Lista de productos filtrados.
 * @returns {boolean} loading - Indica si la búsqueda está en proceso.
 * @returns {string | null} error - Mensaje de error en caso de fallo.
 * @returns {string | null} noResultsMessage - Mensaje cuando no hay resultados.
 * @returns {(filters: Filters) => Promise<void>} handleApplyFilters - Función para aplicar filtros.
 * @returns {() => Promise<void>} handleResetFilters - Función para restablecer los filtros.
 */
const useProductFilters = (categories: Category[]) => { 
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [noResultsMessage, setNoResultsMessage] = useState<string | null>(null);

  /**
   * Aplica los filtros de productos según los criterios especificados.
   * @param {Filters} filters - Filtros a aplicar.
   */
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
          const category = categories.find((cat: Category) => cat.id === filters.categoryId); 
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

  /**
   * Restablece los filtros y obtiene todos los productos.
   */
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

  return {
    filteredProducts,
    loading,
    error,
    noResultsMessage,
    handleApplyFilters,
    handleResetFilters,
  };
};

export default useProductFilters;
