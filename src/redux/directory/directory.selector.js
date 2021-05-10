import { createSelector } from "reselect";
const SelectDirectory = (state) => state.directory;
export const selectDirectorySelection = createSelector(
  [SelectDirectory],
  (directory) => directory.sections
);
