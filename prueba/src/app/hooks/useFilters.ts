import { useState } from "react";
import { Filters } from "../interfaces/Filters.interface";

const useFilters = (initialFilters: Filters = {}) => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const updateFilters = (newFilters: Filters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return { filters, updateFilters, resetFilters };
};

export default useFilters;