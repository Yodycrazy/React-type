import { Product } from "../interfaces/Products.interface";
import ApiService from "./ApiService";

/**
 * Instancia de ApiService con la URL base configurada.
 * @constant {ApiService}
 */
const api = new ApiService("https://api.escuelajs.co/api/v1/");

/**
 * Servicios relacionados con los productos.
 */
export const productServices = {
  /**
   * Obtiene todos los productos disponibles.
   * @returns {Promise<Product[]>} Lista de productos.
   */
  getProducts: () => api.getAll<Product>("products"),

  /**
   * Obtiene un producto por su ID.
   * @param {number} id - Identificador del producto.
   * @returns {Promise<Product>} Producto encontrado.
   */
  getProductById: (id: number) => api.get<Product>(`products/${id}`),

  /**
   * Crea un nuevo producto.
   * @param {Product} data - Datos del producto a crear.
   * @returns {Promise<Product>} Producto creado.
   */
  createProduct: (data: Product) => api.post<Product>("products", data),

  /**
   * Actualiza un producto existente.
   * @param {number} id - Identificador del producto.
   * @param {Product} data - Datos actualizados del producto.
   * @returns {Promise<Product>} Producto actualizado.
   */
  updateProduct: (id: number, data: Product) => api.put<Product>(`products/${id}`, data),

  /**
   * Elimina un producto por su ID.
   * @param {number} id - Identificador del producto.
   * @returns {Promise<void>} Confirmación de eliminación.
   */
  deleteProduct: (id: number) => api.delete<void>(`products/${id}`),

  /**
   * Filtra los productos según los parámetros proporcionados.
   * @param {Object} filters - Filtros opcionales para la búsqueda.
   * @param {string} [filters.title] - Nombre o título del producto.
   * @param {number} [filters.price] - Precio exacto del producto.
   * @param {number} [filters.price_min] - Precio mínimo del producto.
   * @param {number} [filters.price_max] - Precio máximo del producto.
   * @param {number} [filters.categoryId] - Identificador de la categoría.
   * @returns {Promise<Product[]>} Lista de productos filtrados.
   */
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
