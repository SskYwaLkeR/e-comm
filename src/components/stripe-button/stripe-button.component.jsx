import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_JNPotHLWo7Ca59VwkmYYkGKM00AR0Efwbm";

  const onToken = token => {
    console.log(token);
    alert("Payement Succesfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="e-comm"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
