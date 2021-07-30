import React from "react";
import {
  Typography,
  Button,
  IconButton,
  Card,
  Grid,
  ButtonBase,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import useStyles from "./styles";

const CartItem = (props) => {
  const { item, handleRemoveFromCart, handleUpdateCartQty } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} className={classes.imageContainer}>
            <img
              className={classes.img}
              alt="complex"
              src={item.media.source}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            direction="column"
            className={classes.details}
            spacing={2}
          >
            <Grid item xs={12} className={classes.itemName}>
              <Typography gutterBottom variant="h5">
                {item.name}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.quantity}>
              <Button
                className={classes.buttons}
                variant="outlined"
                type="button"
                onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
              >
                <RemoveIcon color="secondary" fontSize="medium" />
              </Button>
              <Typography variant="h5">{item.quantity}</Typography>
              <Button
                className={classes.buttons}
                variant="outlined"
                type="button"
                onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
              >
                <AddIcon color="secondary" fontSize="medium" />
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4} className={classes.remove}>
            <Typography variant="h5">
              {item.line_total.formatted_with_symbol}
            </Typography>
            <Button
              className={classes.removeBtn}
              variant="contained"
              type="button"
              color="secondary"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </Button>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default CartItem;
