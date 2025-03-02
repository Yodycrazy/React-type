import { Category } from "../interfaces/Categories.interface";
import ApiService from "./ApiService";


const api = new ApiService("https://api.escuelajs.co/api/v1/");

export const categoryServices = {
    getCategories : () => api.get("categories"),
    getCategoriesById : (id:number) => api.get("categories/" + id),
    createCategory : (data:Category) => api.post("categories/", data),
    updateCategory : (id:number, data:Category) => api.put("categories/" + id, data),
    deleteCotegory : (id:number) => api.delete("categories/" + id),
    getCategoriesByIdProduct : (id:number) => api.get("categories/" + id + "/products"),

}
