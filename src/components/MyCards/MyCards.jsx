import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Button } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "../FormInput/FormInput";

const MyCards = (props) => {
  const { handleBack, handlePaymentData } = props;
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });
  const methods = useForm();

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="PaymentForm">
      <Cards
        cvc={data.cvc}
        expiry={data.expiry}
        focus={data.focus}
        name={data.name}
        number={data.number}
      />

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            handlePaymentData({ ...data })
          )}
        >
          <input
            type="number"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Name on Card"
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="expiry"
            placeholder="Expiry Date"
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="cvc"
            placeholder="CVC"
            onChange={handleInputChange}
          />
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={handleBack}>Back</Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default MyCards;
