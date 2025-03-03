import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CustomCardContent from './CardContent';
import { Product } from '../../interfaces/Products.interface';
import { Category } from '../../interfaces/Categories.interface';
import CardImage from './CardImage';
import CardButtons from './CardButton';


interface CardProps {
  item: Product | Category;
  valueButton: string;
  onAction: () => void;
}

export default function MultiActionCard({ item, valueButton, onAction }: CardProps) {

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>

        {"images" in item ? (
          <CardImage title={item.title} url={item.images[0]} />
        ) : (
          <CardImage title={item.name} url={item.image} />
        )}

        <CustomCardContent item={item} />
      </CardActionArea>
    <CardButtons value={valueButton} onAction={onAction}  />
    </Card>
  );
}
