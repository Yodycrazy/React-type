import { CardMedia } from "@mui/material";

interface CardImageProps {
    title: string;
    url: string;
}

const CardImage: React.FC<CardImageProps> = ({title, url}) => (
    <CardMedia
    component="img"
    height="200"
    image={url}
    alt={title}
  />
)

export default CardImage;