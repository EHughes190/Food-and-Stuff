import { makeStyles } from "@material-ui/core/styles";
import HeroImage from "../../assets/images/hero-image.jpg";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    margin: "auto",
  },
  header: {
    width: "100%",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "50px",
    backgroundImage: `url(${HeroImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  headerButton: {
    marginTop: "100px",
  },
  headerIcon: {},
  products: {
    paddingTop: "100px",
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));
