import React from "react";
import { Typography, Grid } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import { useForm, FormProvider } from "react-hook-form";
// import FormInput from "../FormInput/FormInput";
import MyCards from "../MyCards/MyCards";

export default function PaymentForm(props) {
  const { handleBack, handlePaymentData, handleNext } = props;
  //const methods = useForm();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid item xs={12}>
        <MyCards handleBack={handleBack} handleNext={handleNext} />
      </Grid>
      {/* <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            handlePaymentData({ ...data })
          )}
        >
          <Grid container spacing={3}>
            <FormInput required name="cardName" label="Name on card" />
            <FormInput required name="cardNum" label="Card number" />
            <FormInput required name="expiry" label="Expiry Date" />
            <FormInput required name="cvc" label="CVC" />
          </Grid>
        </form>
      </FormProvider> */}
    </React.Fragment>
  );
}
