import { Product } from "../interfaces/Products.interface";
import ApiService from "./ApiService";


const api = new ApiService("https://api.escuelajs.co/api/v1/");

export const productServices = {
    getProducts : () => api.get("products"),
    getProductsById : (id:number) => api.get("products/" + id),
    createProduct : (data:Product) => api.post("products/", data),
    updateProduct : (id:number, data:Product) => api.put("products/" + id, data),
    deleteProduct : (id:number) => api.delete("products/" + id)

}
