import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Product } from "../../interfaces/Products.interface";
import { Category } from "../../interfaces/Categories.interface";


interface CardContentProps {
  item: Product | Category;
}

const CustomCardContent: React.FC<CardContentProps> = ({ item }) => (
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {"name" in item ? item.name : item.title} 
    </Typography>

    {"price" in item && (
      <>
        <Typography variant="h6" sx={{ color: "green" }}>
          ${item.price}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {item.description}
        </Typography>
      </>
    )}
  </CardContent>
);

export default CustomCardContent;