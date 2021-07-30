import { makeStyles } from "@material-ui/core/styles";
import HeroImage from "../../assets/images/hero-image.jpg";

export default makeStyles((theme) => ({
  background: {
    backgroundImage: { HeroImage },
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
}));
