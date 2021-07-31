import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Product/Product";
import ProductsHero from "../ProductsHero/ProductsHero";
import useStyles from "./styles";

const Products = (props) => {
  const { products, onAddToCart } = props;

  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ProductsHero />
      <section id="products" className={classes.products}>
        <Grid container spacing={3} className={classes.products}>
          {products.map((product) => {
            return (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            );
          })}
        </Grid>
      </section>
    </main>
  );
};

export default Products;
