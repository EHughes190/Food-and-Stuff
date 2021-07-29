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

const Navbar = (props) => {
  const totalItems = props.totalItems;
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <ToolBar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="moustache"
              height="25px"
              className={classes.image}
            />
            Food and Stuff
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </ToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;
