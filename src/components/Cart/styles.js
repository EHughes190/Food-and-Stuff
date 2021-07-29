import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  backBtn: {
    marginTop: "5%",
    marginBottom: "5%",
    display: "flex",
    justifyContent: "flex-start",
    width: "10px",
    height: "10px",
  },
  title: {
    marginTop: "5%",
    marginBottom: "5%",
    display: "flex",
    justifyContent: "flex-start",
  },
  emptyButton: {
    minWidth: "150px",
    margin: "10px",

    // [theme.breakpoints.down("xs")]: {
    //   marginBottom: "5px",
    // },
    // [theme.breakpoints.up("xs")]: {
    //   marginRight: "20px",
    // },
  },
  checkoutButton: {
    minWidth: "150px",
    margin: "10px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    paddingBottom: "5%",
    width: "100%",
    height: "35vh",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  summary: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingRight: "10px",
  },
  actionButtons: {},
}));
