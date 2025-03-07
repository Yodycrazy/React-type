import { useEffect, useState } from "react";
import { Category } from "../interfaces/Categories.interface";
import { categoryServices } from "../services/Categories.services";

/**
 * Hook personalizado para obtener la lista de categorías desde la API.
 * @returns {Object} Estado del hook.
 * @returns {Category[]} categories - Lista de categorías obtenidas.
 * @returns {boolean} loading - Indica si la carga de datos está en proceso.
 * @returns {string | null} error - Mensaje de error en caso de fallo.
 */
export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /**
     * Función asincrónica para obtener las categorías desde la API.
     */
    const fetchCategories = async () => {
      try {
        const data: Category[] = await categoryServices.getCategories();
        setCategories(data);
      } catch (err) {
        setError("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};
