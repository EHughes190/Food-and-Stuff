import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Product/Product";
import useStyles from "./styles";

const Products = (props) => {
  const products = props.products;
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="flex-start" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
