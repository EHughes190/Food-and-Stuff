import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Cart = (props) => {
  const { cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart } =
    props;

  const classes = useStyles();

  const EmptyCart = () => {
    return (
      <>
        <Typography variant="subtitle1">
          You have no items in you cart. Good for you! People who buy things are
          suckers.
        </Typography>
        <Typography variant="subtitle1">
          <Link to="/" className={classes.link}>
            But if you would like to, click here
          </Link>
        </Typography>
      </>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={4}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={12} key={item.id}>
              <CartItem
                item={item}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container className={classes.cardDetails}>
          <div className={classes.summary}>
            <Typography variant="h4">
              Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <div className={classes.actionButtons}>
              <Button
                className={classes.emptyButton}
                size="large"
                type="button"
                variant="contained"
                color="secondary"
                onClick={handleEmptyCart}
              >
                Empty Cart
              </Button>
              <Button
                component={Link}
                to="/checkout"
                className={classes.checkoutButton}
                size="large"
                type="button"
                variant="contained"
                color="primary"
              >
                Checkout
              </Button>
            </div>
          </div>
        </Grid>
      </>
    );
  };

  if (!cart.line_items) return "loading...";

  return (
    <Container className={classes.cart}>
      <div className={classes.toolbar} />
      <div>
        <Button component={Link} to="/" className={classes.backBtn}>
          <ArrowBackIosIcon />
          Back
        </Button>
      </div>

      <Typography className={classes.title} variant="h3">
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
