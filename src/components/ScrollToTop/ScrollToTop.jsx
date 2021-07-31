import { useEffect } from "react";
//import styles from "./ScrollToTop.module.scss";
import { useLocation } from "react-router-dom";

//COMPONENT FOR SCROLL TO TOP ON EACH ROUTE RENDER
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
