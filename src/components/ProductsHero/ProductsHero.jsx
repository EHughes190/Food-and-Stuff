import React from "react";
import useStyles from "./styles";
import { Button, Typography } from "@material-ui/core";
import HeroImage from "../../assets/images/hero-image.jpg";

const ProductsHero = () => {
  const classes = useStyles();

  return (
    <section backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={HeroImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Sundays
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>

      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </section>
  );
};

export default ProductsHero;
