import React from "react";
import { connect } from "react-redux";
import { SelectCartItems } from "../../redux/cart/cart.selectors";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.key} item={cartItem} />
      ))}
    </div>

    <Button>GO TO CHECKOUT</Button>
  </div>
);
const mapStateToProps = (state) => ({
  cartItems: SelectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
