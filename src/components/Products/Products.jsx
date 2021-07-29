import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Product from "../Product/Product";
import useStyles from "./styles";

const Products = (props) => {
  const { products, onAddToCart } = props;
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <header className={classes.header}>
        <Typography variant="h1" gutterBottom>
          Welcome to Food and Stuff
        </Typography>
        <Typography variant="h3" color="textSecondary">
          The only store you need
        </Typography>
      </header>
      <Grid container justifyContent="flex-start" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
