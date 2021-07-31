import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    margin: "auto",
  },
  products: {
    paddingTop: "75px",
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
  root: {
    flexGrow: 1,
  },
}));
