import { Category } from "../interfaces/Categories.interface";
import ApiService from "./ApiService";

/**
 * Instancia de ApiService con la URL base configurada.
 * @constant {ApiService}
 */
const api = new ApiService("https://api.escuelajs.co/api/v1/");

/**
 * Servicios relacionados con las categorías.
 */
export const categoryServices = {
    /**
     * Obtiene todas las categorías disponibles.
     * @returns {Promise<Category[]>} Lista de categorías.
     */
    getCategories: () => api.getAll<Category>("categories"),

    /**
     * Obtiene una categoría por su ID.
     * @param {number} id - Identificador de la categoría.
     * @returns {Promise<Category>} Categoría encontrada.
     */
    getCategoryById: (id: number) => api.get<Category>(`categories/${id}`),

    /**
     * Crea una nueva categoría.
     * @param {Category} data - Datos de la categoría a crear.
     * @returns {Promise<Category>} Categoría creada.
     */
    createCategory: (data: Category) => api.post<Category>("categories", data),

    /**
     * Actualiza una categoría existente.
     * @param {number} id - Identificador de la categoría.
     * @param {Category} data - Datos actualizados de la categoría.
     * @returns {Promise<Category>} Categoría actualizada.
     */
    updateCategory: (id: number, data: Category) => api.put<Category>(`categories/${id}`, data),

    /**
     * Elimina una categoría por su ID.
     * @param {number} id - Identificador de la categoría.
     * @returns {Promise<void>} Confirmación de eliminación.
     */
    deleteCategory: (id: number) => api.delete<void>(`categories/${id}`),

    /**
     * Obtiene todas las categorías de un producto por su ID.
     * @param {number} id - Identificador del producto.
     * @returns {Promise<Category[]>} Lista de categorías del producto.
     */
    getCategoriesByIdProduct: (id: number) => api.get<Category[]>(`categories/${id}/products`),
};
