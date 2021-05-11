import React from "react";
import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";
const StripeCheckoutButton = ({ price }) => {
  const priceinCents = price * 100;
  console.log(price);
  const key = `pk_test_51IpqnPSHNKZhyujtTuA0avTEyIVCxRk3SkS9fXRl9yTZ1oRYEHG1EHzJX395SMjz30ItUv2TFDLmAq7EOLUXQST000EHKgdx7l`;
  const ontoken = (token) => {
    console.log(token);
    console.log("Payment Successfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="React-Ecommerce Demo"
      panelLabel="Pay Now "
      billingAddress
      amount={priceinCents}
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your Total is : ${price} $`}
      token={ontoken}
      stripeKey={key}
    />
  );
};

export default StripeCheckoutButton;
