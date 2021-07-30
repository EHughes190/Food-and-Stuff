import { makeStyles } from "@material-ui/core/styles";
import HeroImage from "../../assets/images/hero-image.jpg";

export default makeStyles((theme) => ({
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
    fontSize: "25px",
  },
}));
