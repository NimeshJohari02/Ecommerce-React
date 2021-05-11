import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { SelectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import {
  EmptyMessage,
  CartItems,
  StyledButton,
  StyledCartDropdown,
} from "./cart-dropdown.styles.jsx";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
//! connect by-default passes the dispatch as a prop for one time dispatces !!! Hence Destructures
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <StyledCartDropdown>
    <CartItems>
      {!cartItems.length ? (
        <EmptyMessage> You're Cart is empty</EmptyMessage>
      ) : (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.key} item={cartItem} />
        ))
      )}
    </CartItems>

    <StyledButton
      onClick={() => {
        history.push("/checkout");
        //! DISPATCH TAKES IN AN ACTION SO PASS IT AN OBJECT ie returned bt calling toggleCartHidden
        //! and not the toggle Cart hidden as a function
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </StyledButton>
  </StyledCartDropdown>
);
const mapStateToProps = createStructuredSelector({
  cartItems: SelectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
