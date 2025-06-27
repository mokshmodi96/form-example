import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import useCartStore from "../store/cartStore";
import products from "../data/products"; // or fetch from API

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const found = products.find((p) => p.id === parseInt(id));
    setProduct(found);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">{product.name}</Typography>
      <img src={product.image} alt={product.name} style={{ width: "200px" }} />
      <Typography variant="body1" mt={2}>
        {product.description}
      </Typography>
      <Typography variant="h6" mt={1}>
        ₹{product.price}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addToCart(product)}
        sx={{ mt: 2 }}
      >
        Add to Cart
      </Button>
    </Container>
  );
};

export default ProductDetails;
