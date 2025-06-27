import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import useCartStore from "../store/cartStore";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);
  return (
    <Card sx={{ maxWidth: 250, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography
          component={Link}
          to={`/products/${product.id}`}
          gutterBottom
          variant="h6"
        >
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹{product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => addToCart(product)}
          disabled={cart.find((item) => item.id === product.id)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
