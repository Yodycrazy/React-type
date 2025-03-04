import useAsync from "./useAsync";
import { Product } from "../interfaces/Products.interface";
import { productServices } from "../services/Products.services";

const useProducts = () => {
  const { data: products, loading, error, execute: fetchProducts } = useAsync<Product[]>(
    () => productServices.getProducts()
  );

  return { products: products || [], loading, error, fetchProducts };
};

export default useProducts;