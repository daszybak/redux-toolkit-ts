import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const selectCounter = (state: RootState) => state.counter;
export const countSelector = createSelector(
  selectCounter,
  (counter) => counter.count
);
