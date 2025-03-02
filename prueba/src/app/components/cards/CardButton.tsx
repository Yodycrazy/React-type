import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";


interface CardButtonsProps {
  value:string;
  color?: "primary" | "secondary" | "success" | "error";
  onAction: () => void;
}

const CardButtons: React.FC<CardButtonsProps> = ({ value, color = "primary", onAction }) => (
  <CardActions>
      <Button size="small" color={color} onClick={onAction}>
        {value}
      </Button>
    
  </CardActions>
);

export default CardButtons;