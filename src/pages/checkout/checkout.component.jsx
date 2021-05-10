import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
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
    {cartItems.map((cartItem) => cartItem.name)}
    <div className="total">
      <span>Total Cost : ${totalCost}</span>
    </div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: SelectCartItems,
  totalCost: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
