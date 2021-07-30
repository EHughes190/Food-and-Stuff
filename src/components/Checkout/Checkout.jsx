import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
//import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import AddressForm from "../AddressForm/AddressForm";
import PaymentForm from "../PaymentForm/PaymentForm";
import Review from "../Review/Review";
import useStyles from "./styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { commerce } from "../../lib/commerce";

const steps = ["Shipping", "Payment", "Review"];

const Checkout = (props) => {
  const { cart, refreshCart } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [paymentData, setPaymentData] = useState({});

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm handleShippingData={handleShippingData} />;
      case 1:
        return (
          <PaymentForm
            handleBack={handleBack}
            handlePaymentData={handlePaymentData}
          />
        );
      case 2:
        return (
          <Review
            checkoutToken={checkoutToken}
            cart={cart}
            paymentData={paymentData}
            shippingData={shippingData}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        setCheckoutToken(token);
      } catch (error) {
        console.log(error);
      }
    };

    generateToken();
  }, [cart]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleShippingData = (data) => {
    setShippingData(data);
    handleNext();
  };

  const handlePaymentData = (data) => {
    setPaymentData(data);
    handleNext();
  };

  console.log(checkoutToken);
  console.log(shippingData);

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper
            activeStep={activeStep}
            className={classes.stepper}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped. (Not really).
                </Typography>
                <Button component={Link} to="/" onClick={refreshCart}>
                  Back to Shop
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {checkoutToken && getStepContent(activeStep)}
                {/* <div className={classes.buttons}>
                  {activeStep === 0 ? (
                    <Button
                      component={Link}
                      to="/cart"
                      className={classes.button}
                    >
                      Cancel
                    </Button>
                  ) : (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div> */}
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
};

export default Checkout;
