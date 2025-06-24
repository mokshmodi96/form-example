import { Container, Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const Store = () => {
    return (
        <Container>
            <Typography variant="h4" mt={4} mb={2}>Shop Products</Typography>
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Store;
