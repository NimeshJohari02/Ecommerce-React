import { createSelector } from "reselect";
export const selectCart = (state) => state.cart;
export const SelectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const SelectCartItemsCount = createSelector(
  [SelectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
