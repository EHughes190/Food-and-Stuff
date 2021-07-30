import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "../FormInput/FormInput";
import { Link } from "react-router-dom";

const AddressForm = (props) => {
  const { handleShippingData } = props;
  const methods = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => handleShippingData(data))}
        >
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First Name" />
            <FormInput required name="lastName" label="Last Name" />
            <FormInput required name="address1" label="Address Line 1" />
            <FormInput required name="address2" label="Address Line 2" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Zip Code/ Postcode" />
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} to="/cart">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
