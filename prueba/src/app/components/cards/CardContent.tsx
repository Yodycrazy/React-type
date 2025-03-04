import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Product } from "../../interfaces/Products.interface";
import { Category } from "../../interfaces/Categories.interface";

interface CustomCardContentProps {
  item: Product | Category;
}

const CustomCardContent: React.FC<CustomCardContentProps> = ({ item }) => {
  const title = "title" in item ? item.title : item.name;

  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      
      {"price" in item && (
        <Typography variant="h6" sx={{ color: "green" }}>
          ${item.price}
        </Typography>
      )}
    </CardContent>
  );
};

export default CustomCardContent;