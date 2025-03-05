import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../interfaces/Products.interface';
import apiServiceInstance from '../../services/ApiServiceInstance';
import ProductGrid from '../products/ProductGrid'; 

const CategoryProducts: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (products.length === 0) return <p>No hay productos en esta categoría.</p>;

  return (
    <div>
      <h1>Productos de la Categoría</h1>
      <ProductGrid products={products} /> 
    </div>
  );
};

export default CategoryProducts;