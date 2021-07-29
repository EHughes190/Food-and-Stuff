import React from "react";
import {
  AppBar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import ToolBar from "@material-ui/core/Toolbar";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/images/shop-logo.png";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const totalItems = props.totalItems;
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <ToolBar>
          <Typography
            variant="h6"
            className={classes.title}
            color="inherit"
            component={Link}
            to="/"
          >
            <img
              src={logo}
              alt="moustache"
              height="25px"
              className={classes.image}
            />
            Food and Stuff
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </ToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;
