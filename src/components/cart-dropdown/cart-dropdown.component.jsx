import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { SelectCartItems } from "../../redux/cart/cart.selectors";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { withRouter } from "react-router-dom";
const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {!cartItems.length ? (
        <span className="empty-message"> You're Cart is empty</span>
      ) : (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.key} item={cartItem} />
        ))
      )}
    </div>

    <Button onClick={() => history.push("/checkout")}>GO TO CHECKOUT</Button>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: SelectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
