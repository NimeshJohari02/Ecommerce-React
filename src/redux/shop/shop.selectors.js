import { createSelector } from "reselect";
const SelectShop = (state) => state.shop;
export const SelectCollections = createSelector(
  [SelectShop],
  (shop) => shop.collections
);

export const SelectCollection = (collectionUrlParam) =>
  createSelector(
    [SelectCollections],
    (collections) => collections[collectionUrlParam]
  );
