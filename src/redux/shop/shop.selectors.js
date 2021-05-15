import { createSelector } from "reselect";
const SelectShop = (state) => state.shop;
export const SelectCollections = createSelector(
  [SelectShop],
  (shop) => shop.collections
);
export const SelectCollectionsForPreview = createSelector(
  [SelectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((el) => collections[el]) : []
);

export const SelectCollection = (collectionUrlParam) =>
  createSelector([SelectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
