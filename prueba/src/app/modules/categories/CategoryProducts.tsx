import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../interfaces/Products.interface';
import apiServiceInstance from '../../services/ApiServiceInstance';
import ProductGrid from '../products/ProductGrid'; 
import { Box, Typography } from '@mui/material';

/**
 * Componente que muestra los productos pertenecientes a una categoría específica.
 * Obtiene los productos mediante una llamada a la API usando el ID de la categoría.
 *
 * @component
 * @returns {JSX.Element} Vista con el listado de productos de la categoría.
 */
const CategoryProducts: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtiene el ID de la categoría desde la URL
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Obtiene los productos de la categoría desde la API.
   */
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await apiServiceInstance.get<Product[]>(`/categories/${id}/products`);
        setProducts(response);
      } catch (error) {
        setError('Error al cargar los productos de la categoría');
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [id]);

  // Muestra un mensaje mientras se cargan los productos
  if (loading) return <p>Cargando...</p>;

  // Muestra un mensaje si hay un error en la carga
  if (error) return <p>{error}</p>;

  // Muestra un mensaje si la categoría no tiene productos
  if (products.length === 0) return <p>No hay productos en esta categoría.</p>;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2, color: "white" }}>
        Productos de la Categoría
      </Typography>
      <ProductGrid products={products} /> 
    </Box>
  );
};

export default CategoryProducts;
