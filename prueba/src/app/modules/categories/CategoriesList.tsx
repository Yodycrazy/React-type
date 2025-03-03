import MultiActionCard from "../../components/cards/MultiActionCard";
import { useCategories } from "../../hooks/useCategories";
import Grid from "@mui/material/Grid2";


const CategoryList = () => {
  const { categories, loading, error } = useCategories();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  
const handlerButton = () => {
    alert("funcionaaaa")
}
return (
    <Grid container spacing={2} columns={24}>
      {categories.map((categories, index) => (
      <Grid key={index}  size="grow">
     <MultiActionCard item={categories} valueButton="ver categorias" onAction={handlerButton}/>
    </Grid>

      ))}
    </Grid>
  );
};

export default CategoryList;