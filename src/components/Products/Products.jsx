import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Product from "../Product/Product";
import ProductsHero from "../ProductsHero/ProductsHero";
import useStyles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

const BlueTextTypography = withStyles({
  root: {
    color: blueGrey[800],
  },
})(Typography);

const Products = (props) => {
  const { products, onAddToCart } = props;

  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <header className={classes.header}>
        <BlueTextTypography variant="h2">
          Welcome to Food and Stuff
        </BlueTextTypography>
        <Typography variant="h4" color="textSecondary">
          The only store you need
        </Typography>
        <LinkScroll to="products" smooth={true}>
          <Button
            variant="outlined"
            className={classes.headerButton}
            color="primary"
            size="large"
          >
            Products
          </Button>
        </LinkScroll>
        <ExpandMoreIcon
          className={classes.headerIcon}
          fontSize="large"
          color="primary"
        />
      </header>
      {/* <ProductsHero /> */}
      <section id="products" className={classes.products}>
        <Grid container justifyContent="flex-start" spacing={4}>
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
