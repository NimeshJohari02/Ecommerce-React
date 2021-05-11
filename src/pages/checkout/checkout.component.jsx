import React from "react";
import { connect } from "react-redux";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import {
  SelectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";
const CheckoutPage = ({ cartItems, totalCost }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-blocks">
        <span> Product </span>
      </div>
      <div className="header-blocks">
        <span>Description</span>
      </div>
      <div className="header-blocks">
        <span>Quantity</span>
      </div>
      <div className="header-blocks">
        <span>Price</span>
      </div>
      <div className="header-blocks">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>Total Cost : ${totalCost}</span>
    </div>
    <div className="test-warning">
      * Please Use the follwing test credit card details.
      <br />
      Visa 4242 4242 4242 4242 - Expiry - 01/24 -CVV -123
    </div>
    <StripeCheckoutButton price={totalCost} />
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: SelectCartItems,
  totalCost: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
