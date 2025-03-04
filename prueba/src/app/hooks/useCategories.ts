import useAsync from "./useAsync";
import { Category } from "../interfaces/Categories.interface";
import { categoryServices } from "../services/Categories.services";

const useCategories = () => {
  const { data: categories, loading, error, execute: fetchCategories } = useAsync<Category[]>(
    () => categoryServices.getCategories()
  );

  return { categories: categories || [], loading, error, fetchCategories };
};

export default useCategories;