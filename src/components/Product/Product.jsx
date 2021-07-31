import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = (props) => {
  const { product, onAddToCart } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <div className={classes.description}>
          <Typography variant="body2" color="textSecondary">
            {/* Removes p tags auto filled */}
            {product.description.substring(3, product.description.length - 4)}
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          aria-label="Add to Cart"
          onClick={() => onAddToCart(product.id, 1)}
        >
          Add to Cart <AddShoppingCart className={classes.cartButton} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
