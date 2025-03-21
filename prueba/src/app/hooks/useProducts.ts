import { useEffect, useState } from "react";
import { Product } from "../interfaces/Products.interface";
import { productServices } from "../services/Products.services";

/**
 * Hook personalizado para obtener la lista de productos.
 * @returns {Object} Estado y funciones del hook.
 * @returns {Product[]} products - Lista de productos obtenidos.
 * @returns {boolean} loading - Indica si los productos se están cargando.
 * @returns {string | null} error - Mensaje de error en caso de fallo.
 */
export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /**
     * Obtiene la lista de productos desde el servicio.
     */
    const fetchProducts = async () => {
      try {
        const data: Product[] = await productServices.getProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
