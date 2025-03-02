import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CustomCardContent from './CardContent';
import CardButtons from './CardButton';

interface CardProps {
    title: string;
    children:React.ReactNode;
}

export default function MultiActionAreaCard({title, children}:CardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
       <CustomCardContent item={}/>
      </CardActionArea>
      <CardButtons/>
    </Card>
  );
}
