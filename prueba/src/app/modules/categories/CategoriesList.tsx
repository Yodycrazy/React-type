import MultiActionCard from "../../components/cards/MultiActionCard";
import Grid from "@mui/material/Grid2";
import { useCategories } from "../../hooks/useCategories";
import { Typography } from "@mui/material";

const CategoryList = () => {
  const { categories, loading, error } = useCategories();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  
const handlerButton = () => {
    alert("funcionaaaa")
}
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