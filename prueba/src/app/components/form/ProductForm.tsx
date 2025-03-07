import React from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import { Category } from "../../interfaces/Categories.interface";
import CategorySelect from "./CategorySelect";
import { useProductForm } from "../../hooks/useProductForm";

interface ProductFormProps {
  categories: Category[];
}

const ProductForm: React.FC<ProductFormProps> = ({ categories }) => {
  const { product, success, error, handleChange, handleSubmit } = useProductForm();

  return (
    <Box sx={{ mt: 4, width: "100%", display: "flex", justifyContent: "center" }}>
      <Box maxWidth="sm" sx={{ p: 4, backgroundColor: "background.paper", borderRadius: 5 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Añadir Producto
        </Typography>
        {success && <Alert severity="success">Producto añadido correctamente</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
        
        <form onSubmit={handleSubmit}>
          <TextField label="Título" name="title" value={product.title} onChange={handleChange} fullWidth margin="normal" required />
          <TextField label="Precio" name="price" type="number" value={product.price} onChange={handleChange} fullWidth margin="normal" required />
          <TextField label="Descripción" name="description" value={product.description} onChange={handleChange} fullWidth margin="normal" multiline rows={4} required />
          
          <CategorySelect categories={categories} value={product.categoryId} onChange={handleChange} />

          <TextField label="URL de la imagen (separadas por comas)" name="images" value={product.images.join(",")} 
            onChange={(e) => handleChange({ target: { name: "images", value: e.target.value.split(",") } })} 
            fullWidth margin="normal" required 
          />

          <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
            <Button type="submit" variant="contained" color="primary">
              Añadir Producto
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ProductForm;