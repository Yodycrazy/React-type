import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../interfaces/Products.interface';
import apiServiceInstance from '../../services/ApiServiceInstance';
import { Box, Typography } from '@mui/material';

/**
 * Componente que muestra los detalles de un producto específico.
 * Obtiene la información del producto mediante una llamada a la API.
 *
 * @component
 * @returns {JSX.Element} Página con los detalles del producto.
 */
const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Obtiene los detalles del producto desde la API.
   */
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await apiServiceInstance.get<Product>(`/products/${id}`);
        setProduct(response);
      } catch (error) {
        setError('Error al cargar el producto');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Muestra un mensaje mientras se carga el producto
  if (loading) return <p>Cargando...</p>;

  // Muestra un mensaje si ocurre un error al cargar
  if (error) return <p>{error}</p>;

  // Muestra un mensaje si el producto no existe
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <Box>
      <Typography variant="h3" component="h2" sx={{ pt: 2, color: "white" }}>
        {product.title}
      </Typography>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <div>
        <Typography variant="h4" component="h3" sx={{ pt: 2, color: "white" }}>
          Imágenes:
        </Typography>
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen ${index + 1}`} style={{ width: '200px', margin: '10px' }} />
        ))}
      </div>
    </Box>
  );
};

export default ProductDetail;
