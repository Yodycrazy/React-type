import { useProducts } from "../../hooks/useProducts";
import Grid from "@mui/material/Grid2";
import MultiActionCard from "../../components/cards/MultiActionCard";

const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  
const handlerButton = () => {
    alert("funcionaaaa")
}

  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
      <Grid key={index}  size={{ xs:12, sm:6, md:4}}>
     <MultiActionCard item={product} valueButton="ver producto" onAction={handlerButton}/>
    </Grid>

      ))}
    </Grid>
  );
};

export default ProductList;