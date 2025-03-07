import { useState } from "react";
import { Filters } from "../interfaces/Filters.interface";

/**
 * Hook personalizado para manejar filtros en la aplicación.
 * @param {Filters} [initialFilters={}] - Estado inicial de los filtros.
 * @returns {Object} Estado y funciones del hook.
 * @returns {Filters} filters - Objeto que contiene los filtros actuales.
 * @returns {(newFilters: Filters) => void} updateFilters - Función para actualizar los filtros existentes.
 * @returns {() => void} resetFilters - Función para restablecer los filtros a su estado inicial.
 */
const useFilters = (initialFilters: Filters = {}) => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  /**
   * Actualiza los filtros combinando los nuevos con los existentes.
   * @param {Filters} newFilters - Nuevos filtros a aplicar.
   */
  const updateFilters = (newFilters: Filters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  /**
   * Restablece los filtros a su estado inicial.
   */
  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return { filters, updateFilters, resetFilters };
};

export default useFilters;
