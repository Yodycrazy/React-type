import { useState } from "react";
import { Product } from "../interfaces/Products.interface";
import ApiService from "../services/ApiService";

// Instancia del servicio de API para realizar solicitudes HTTP
const apiService = new ApiService("https://api.escuelajs.co/api/v1");

/**
 * Hook personalizado para manejar el formulario de productos.
 * Gestiona el estado del producto, el éxito o error en el envío y las funciones asociadas.
 * 
 * @returns {object} - Devuelve el estado del producto, mensajes de éxito o error,
 * y funciones para manejar cambios en el formulario y envío de datos.
 */
export const useProductForm = () => {
  // Estado inicial del producto
  const [product, setProduct] = useState<Product>({
    title: "",
    price: 0,
    description: "",
    categoryId: 0,
    images: [],
  });

  // Estado para manejar la confirmación de éxito
  const [success, setSuccess] = useState<boolean>(false);

  // Estado para manejar mensajes de error
  const [error, setError] = useState<string | null>(null);

  /**
   * Maneja los cambios en los campos del formulario.
   * Actualiza el estado del producto con los valores ingresados por el usuario.
   * 
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: any } }} e - Evento del formulario.
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: any } }
  ) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name as string]: name === 'categoryId' ? Number(value) : value,
    });
  };

  /**
   * Maneja el envío del formulario.
   * Envía los datos del producto a la API y maneja respuestas de éxito o error.
   * 
   * @param {React.FormEvent} e - Evento de envío del formulario.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiService.post<Product>("/products/", product);
      setSuccess(true);
      setError(null);
      handleReset();
    } catch (err) {
      setError("Hubo un error al añadir el producto");
      console.error("Error al añadir el producto:", err);
    }
  };

  /**
   * Restablece el formulario a su estado inicial.
   */
  const handleReset = () => {
    setProduct({
      title: "",
      price: 0,
      description: "",
      categoryId: 0,
      images: [],
    });
  };

  return {
    product,
    success,
    error,
    handleChange,
    handleSubmit,
  };
};