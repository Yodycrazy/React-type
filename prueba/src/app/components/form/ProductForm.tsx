import React, { useState } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Alert,
  SelectChangeEvent,
} from '@mui/material';
import { Category } from '../../interfaces/Categories.interface';
import ApiService from '../../services/ApiService';
import { Product } from '../../interfaces/Products.interface';


interface ProductFormProps {
  categories: Category[];
}

const ProductForm: React.FC<ProductFormProps> = ({ categories }) => {
  const apiService = new ApiService('https://api.escuelajs.co/api/v1');

  
  const [product, setProduct] = useState<Product>({
    title: '',
    price: 0,
    description: '',
    categoryId: 0,
    images: [],
  });

  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<number>
  ) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name as string]: name === 'categoryId' ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await apiService.post<Product>('/products/', product);
      setSuccess(true);
      setError(null);
      handleReset();
    } catch (err) {
      setError('Hubo un error al añadir el producto');
      console.error('Error al añadir el producto:', err);
    }
  };

  
  const handleReset = () => {
    setProduct({
      title: '',
      price: 0,
      description: '',
      categoryId: 0,
      images: [],
    });
  };

  return (
    <Box sx={{ mt: 4, width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box maxWidth="sm" sx={{ p: 4, backgroundColor: 'background.paper', borderRadius: 5 }}>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Añadir Producto
          </Typography>
          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Producto añadido correctamente
            </Alert>
          )}
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Título"
              name="title"
              value={product.title}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Precio"
              name="price"
              type="number"
              value={product.price}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Descripción"
              name="description"
              value={product.description}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              required
            />
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Categoría</InputLabel>
              <Select
                name="categoryId"
                value={product.categoryId}
                onChange={handleChange}
                label="Categoría"
              >
                <MenuItem value="">Selecciona una categoría</MenuItem>
                {categories.map((cat) => (
                  <MenuItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="URL de la imagen (separadas por comas)"
              name="images"
              value={product.images.join(',')}
              onChange={(e) =>
                setProduct({
                  ...product,
                  images: e.target.value.split(','),
                })
              }
              fullWidth
              margin="normal"
              required
            />
            <Box sx={{ mt: 3, display: 'flex', justifyContent: "center" }}>
              <Button type="submit" variant="contained" color="primary">
                Añadir Producto
              </Button>

            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductForm;