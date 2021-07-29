import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

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
        <div className={classes.cardDetails}>
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

          <div className={classes.summary}>
            <Typography variant="h4">
              Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <Button
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
      </>
    );
  };

  if (!cart.line_items) return "loading...";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
