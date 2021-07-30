import React from "react";
import useStyles from "./styles";
import { Button, Typography } from "@material-ui/core";
import HeroImage from "../../assets/images/hero-image.jpg";
import { withStyles } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as LinkScroll } from "react-scroll";

const BlueTextTypography = withStyles({
  root: {
    color: blueGrey[800],
  },
})(Typography);

const ProductsHero = () => {
  const classes = useStyles();

  return (
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
  );
};

export default ProductsHero;
