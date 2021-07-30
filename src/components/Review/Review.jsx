import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Grid,
  ListItem,
  List,
  ListItemText,
} from "@material-ui/core";
import useStyles from "./styles";

const Review = (props) => {
  const { checkoutToken, paymentData, shippingData, handleBack, handleNext } =
    props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {checkoutToken.live.line_items.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText
              primary={product.name}
              secondary={`Quantity: ${product.quantity}`}
            />
            <Typography variant="body2">
              {product.price.formatted_with_symbol}
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {checkoutToken.live.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {shippingData.firstName} {shippingData.lastName},
          </Typography>
          <Typography gutterBottom>{shippingData.address1},</Typography>
          <Typography gutterBottom>{shippingData.address2},</Typography>
          <Typography gutterBottom>{shippingData.city},</Typography>
          <Typography gutterBottom>{shippingData.zip}</Typography>
        </Grid>
        {/* <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>Name on Card:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{paymentData.cardName}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Card Number:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{paymentData.cardNum}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Expiry:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{paymentData.expiry}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>*/}
      </Grid>
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleNext} variant="contained" color="primary">
          Pay {checkoutToken.live.subtotal.formatted_with_symbol}
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Review;
