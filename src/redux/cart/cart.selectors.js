import { createSelector } from "reselect";
export const selectCart = (state) => state.cart;
export const SelectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const SelectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
export const SelectCartItemsCount = createSelector(
  [SelectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([SelectCartItems], (cartItems) =>
  cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  )
);
