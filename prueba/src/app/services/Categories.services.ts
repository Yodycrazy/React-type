import { Category } from "../interfaces/Categories.interface";
import ApiService from "./ApiService";

const api = new ApiService("https://api.escuelajs.co/api/v1/");

export const categoryServices = {
    getCategories: () => api.getAll<Category>("categories"),
    getCategoryById: (id: number) => api.get<Category>(`categories/${id}`),
    createCategory: (data: Category) => api.post<Category>("categories", data),
    updateCategory: (id: number, data: Category) => api.put<Category>(`categories/${id}`, data),
    deleteCategory: (id: number) => api.delete<void>(`categories/${id}`), 
    getCategoriesByIdProduct: (id: number) => api.get<Category[]>(`categories/${id}/products`),
};
