import React from 'react';
import useCartStore from '../store/cartStore';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCartStore();

    return (
        <Container>
            <Typography variant="h4" mt={4}>Your Cart</Typography>
            {cart.length === 0 ? (
                <Typography mt={2}>Cart is empty</Typography>
            ) : (
                <>
                    <List>
                        {cart.map(item => (
                            <ListItem key={item.id} divider>
                                <ListItemText
                                    primary={`${item.name} (₹${item.price})`}
                                    secondary={`Qty: ${item.quantity}`}
                                />
                                <Button color="error" onClick={() => removeFromCart(item.id)}>Remove</Button>
                            </ListItem>
                        ))}
                    </List>
                    <Button variant="outlined" color="error" onClick={clearCart}>
                        Clear Cart
                    </Button>
                </>
            )}
        </Container>
    );
};

export default Cart;
