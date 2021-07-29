import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  title: {
    marginTop: "5%",
    marginBottom: "5%",
    display: "flex",
    justifyContent: "flex-start",
  },
  emptyButton: {
    minWidth: "150px",
    maxHeight: "50px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    paddingBottom: "5%",
    width: "100%",
    height: 200,
    justifyContent: "space-between",
    alignItems: "center",
  },
  summary: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
}));
