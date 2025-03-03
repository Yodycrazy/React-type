import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";


interface CardButtonsProps {
  value:string;
  color?: "primary" | "secondary" | "success" | "error";
  onAction: () => void;
}

const CardButtons: React.FC<CardButtonsProps> = ({ value, color = "primary", onAction }) => (
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
          onClick={onAction}
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

export default CardButtons;