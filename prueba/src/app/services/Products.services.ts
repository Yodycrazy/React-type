import { Product } from "../interfaces/Products.interface";
import ApiService from "./ApiService";

const api = new ApiService("https://api.escuelajs.co/api/v1/");

export const productServices = {
    getProducts: () => api.getAll<Product>("products"),
    getProductById: (id: number) => api.get<Product>(`products/${id}`),
    createProduct: (data: Product) => api.post<Product>("products", data),
    updateProduct: (id: number, data: Product) => api.put<Product>(`products/${id}`, data),
    deleteProduct: (id: number) => api.delete<void>(`products/${id}`), 
};
