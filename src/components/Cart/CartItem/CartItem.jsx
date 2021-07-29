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
        <Grid container spacing={2}>
          <Grid item className={classes.imageContainer}>
            <ButtonBase className={classes.imageBtn}>
              <img
                className={classes.img}
                alt="complex"
                src={item.media.source}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.itemName}
                >
                  {item.name}
                </Typography>
              </Grid>
              <div className={classes.buttons}>
                <IconButton
                  type="button"
                  onClick={() =>
                    handleUpdateCartQty(item.id, item.quantity - 1)
                  }
                >
                  <RemoveIcon color="secondary" />
                </IconButton>
                <Typography variant="h6">{item.quantity}</Typography>
                <IconButton
                  type="button"
                  onClick={() =>
                    handleUpdateCartQty(item.id, item.quantity + 1)
                  }
                >
                  <AddIcon color="secondary" />
                </IconButton>
              </div>
            </Grid>

            <Grid item className={classes.remove}>
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
        </Grid>
      </Card>
    </div>
  );
};

export default CartItem;
