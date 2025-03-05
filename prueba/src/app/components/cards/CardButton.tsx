import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";

interface CardButtonsProps {
  value: string;
  color?: "primary" | "secondary" | "success" | "error";
  itemId?: number; 
  onAction?: () => void; 
}

const CardButtons: React.FC<CardButtonsProps> = ({ value, color = "primary", itemId, onAction }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (itemId) {
      if (value.toLowerCase().includes("producto")) {
        navigate(`/products/${itemId}`); 
      } 
      else if (value.toLowerCase().includes("categorias")) {
        navigate(`/categories/${itemId}/products`);
      }
    } else if (onAction) {
      onAction(); 
    }
  };

  return (
    <CardActions
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Grid container justifyContent="center" spacing={1}>
        <Grid>
          <Button
            size="small"
            color={color}
            onClick={handleClick}
            sx={{
              textAlign: "center",
              transition: "all 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "#1976d2",
                color: "#fff",
              },
            }}
          >
            {value}
          </Button>
        </Grid>
      </Grid>
    </CardActions>
  );
};

export default CardButtons;