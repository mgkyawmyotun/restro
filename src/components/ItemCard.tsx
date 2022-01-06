import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { getImage } from '../firebase/storage';
interface ItemCardProps {
  photo__url: string;
  name: string;
  price: number;
  phone: number;
}
export const ItemCard: FC<ItemCardProps> = ({
  photo__url,
  name,
  price,
  phone,
}) => {
  const [imagePath, setImagePath] = useState<string>('');
  useEffect(() => {
    getImage(photo__url).then((path) => setImagePath(path));
  }, []);
  return (
    <Card sx={{ maxWidth: 200, minWidth: 200, marginLeft: 4, marginBottom: 4 }}>
      <CardMedia
        component="img"
        height="140"
        image={imagePath}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <h4>Price - {price} ကျပ်</h4>
        <h4>Phone - {phone}</h4>
      </CardContent>
    </Card>
  );
};
