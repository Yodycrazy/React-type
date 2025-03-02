import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Product } from "../../interfaces/Products.interface";
import { Category } from "../../interfaces/Categories.interface";

interface CardButtonsProps {
  item: Product | Category;
  onAction: (item: Product | Category) => void;
}

const CardButtons: React.FC<CardButtonsProps> = ({ item, onAction }) => (
  <CardActions>
    {"price" in item ? (
      <Button size="small" color="secondary" onClick={() => onAction(item)}>
        Add to Cart
      </Button>
    ) : (
      <Button size="small" color="primary" onClick={() => onAction(item)}>
        View Category
      </Button>
    )}
  </CardActions>
);

export default CardButtons;