import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Cart = (props) => {
  const { cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart } =
    props;

  const classes = useStyles();

  // RENDERED IF CART EMPTY
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

  //RENDERED IF CART HAS ITEMS
  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={4}>
          {/* RENDERING CART ITEMS */}
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
        {/* PRICE TOTAL AND BUTTONS FOR CHECKOUT OR EMPTY CART */}
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

  // ERROR CATCH DELAY
  if (!cart.line_items) return "loading...";

  return (
    <Container className={classes.cart}>
      <div className={classes.toolbar} />
      <Button component={Link} to="/" className={classes.backBtn}>
        <ArrowBackIosIcon />
        Back
      </Button>
      <Typography className={classes.title} variant="h4">
        Your Shopping Cart
      </Typography>
      {/* IF LENGTH OF CART ITEMS IS FALSY (0), DISPLAY EMPTY CART, ELSE SHOW FILLED CART */}
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
