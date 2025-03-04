import { Product } from "../interfaces/Products.interface";
import ApiService from "./ApiService";

const api = new ApiService("https://api.escuelajs.co/api/v1/");

export const productServices = {
  getProducts: () => api.getAll<Product>("products"),
  getProductById: (id: number) => api.get<Product>(`products/${id}`),
  createProduct: (data: Product) => api.post<Product>("products", data),
  updateProduct: (id: number, data: Product) => api.put<Product>(`products/${id}`, data),
  deleteProduct: (id: number) => api.delete<void>(`products/${id}`),

  
  filterProducts: (filters: {
    title?: string;
    price?: number;
    price_min?: number;
    price_max?: number;
    categoryId?: number;
  }) => {
    const queryParams = new URLSearchParams();

    if (filters.title) queryParams.append("title", filters.title);
    if (filters.price) queryParams.append("price", filters.price.toString());
    if (filters.price_min) queryParams.append("price_min", filters.price_min.toString());
    if (filters.price_max) queryParams.append("price_max", filters.price_max.toString());
    if (filters.categoryId) queryParams.append("categoryId", filters.categoryId.toString());

    return api.getAll<Product>(`products?${queryParams.toString()}`);
  },
};