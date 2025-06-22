import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 250, margin: 2 }}>
            <CardMedia
                component="img"
                height="140"
                width="100%"
                image={product.image}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h6">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ₹{product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained">Add to Cart</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
