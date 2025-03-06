import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../interfaces/Products.interface';
import apiServiceInstance from '../../services/ApiServiceInstance';
import { Box, Typography } from '@mui/material';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <Box>
      <Typography  variant="h3" component="h2" sx={{ pt: 2, color: "white" }}>{product.title}</Typography>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <div>
        <Typography  variant="h4" component="h3" sx={{ pt: 2, color: "white" }}>Imágenes:</Typography>
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen ${index + 1}`} style={{ width: '200px', margin: '10px' }} />
        ))}
      </div>
    </Box>
  );
};

export default ProductDetail;