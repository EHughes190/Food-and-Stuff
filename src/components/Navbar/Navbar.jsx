import React from "react";
import {
  AppBar,
  IconButton,
  Button,
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
          <Typography variant="h6" className={classes.title} color="inherit">
            <Link to="/">
              <img
                src={logo}
                alt="moustache"
                height="50px"
                className={classes.image}
              />
            </Link>
            Food and Stuff
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <Button
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                Cart
                <IconButton>
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Button>
            </div>
          )}
        </ToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;
