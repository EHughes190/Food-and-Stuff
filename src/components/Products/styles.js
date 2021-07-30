import { makeStyles } from "@material-ui/core/styles";
import HeroImage from "../../assets/images/hero-image.jpg";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    margin: "auto",
  },
  products: {
    paddingTop: "100px",
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "flex-start",
  },
  root: {
    flexGrow: 1,
  },
}));
