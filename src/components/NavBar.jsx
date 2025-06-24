import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';

const NavBar = () => {
    const cartCount = useCartStore(state => state.cart.length);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    E-Commerce
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/store">Store</Button>
                    <Button color="inherit" component={Link} to="/cart">
                        Cart ({cartCount})
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
