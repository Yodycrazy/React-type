import React, { useState } from 'react';
import { Category } from '../../interfaces/Categories.interface';
import ApiService from '../../services/ApiService';
import { Product } from '../../interfaces/Products.interface';


interface ProductFormProps {
  categories: Category[]; 
  onProductAdded: () => void; 
}

const ProductForm: React.FC<ProductFormProps> = ({ categories, onProductAdded }) => {
  const apiService = new ApiService('https://api.escuelajs.co/api/v1');

  // Estado para manejar los datos del formulario
  const [product, setProduct] = useState<Product>({
    title: '',
    price: 0,
    description: '',
    categoryId: 0,
    images: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === 'categoryId' ? Number(value) : value, 
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await apiService.post<Product>('/products/', product);
      alert('Producto añadido correctamente');
      onProductAdded();
    } catch (error) {
      console.error('Error al añadir el producto:', error);
      alert('Hubo un error al añadir el producto');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Categoría:</label>
        <select
          name="categoryId"
          value={product.categoryId}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una categoría</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Imágenes (separadas por comas):</label>
        <input
          type="text"
          name="images"
          value={product.images.join(',')}
          onChange={(e) =>
            setProduct({
              ...product,
              images: e.target.value.split(','),
            })
          }
          required
        />
      </div>
      <button type="submit">Añadir Producto</button>
    </form>
  );
};

export default ProductForm;