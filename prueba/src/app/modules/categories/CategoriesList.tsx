import MultiActionCard from "../../components/cards/MultiActionCard";
import Grid from "@mui/material/Grid2";
import { useCategories } from "../../hooks/useCategories";
import { Typography } from "@mui/material";

/**
 * Componente que muestra una lista de categorías en una cuadrícula.
 * Permite ver las categorías disponibles y ejecutar una acción en cada una.
 * 
 * @component
 * @returns {JSX.Element} Página con la lista de categorías.
 */
const CategoryList = () => {
  const { categories, loading, error } = useCategories();

  // Muestra un mensaje de carga mientras se obtienen las categorías
  if (loading) return <p>Loading...</p>;

  // Muestra un mensaje de error si la carga falla
  if (error) return <p>{error}</p>;

  /**
   * Maneja la acción del botón en cada tarjeta de categoría.
   */
  const handlerButton = () => {
    alert("funcionaaaa");
  };


return (
  <>
    <Typography variant="h3" component="h2" sx={{py:4, color: "white"}}>Categorias</Typography>
    <Grid container spacing={2} columns={16}>
      {categories.map((categories, index) => (
      <Grid key={index}  size={{ xs: 6, md: 4 }}>
     <MultiActionCard item={categories} valueButton="ver categorias" onAction={handlerButton}/>
    </Grid>

      ))}
    </Grid>
    </>
  );
};

export default CategoryList;