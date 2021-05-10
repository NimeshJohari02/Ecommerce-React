import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { SelectCartItems } from "../../redux/cart/cart.selectors";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
//! connect by-default passes the dispatch as a prop for one time dispatces !!! Hence Destructures
const CartDropdown = ({ cartItems, history, dispatch }) => (
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

    <Button
      onClick={() => {
        history.push("/checkout");
        //! DISPATCH TAKES IN AN ACTION SO PASS IT AN OBJECT ie returned bt calling toggleCartHidden
        //! and not the toggle Cart hidden as a function
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </Button>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: SelectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
