import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("counter/increment");
export const decrement = createAction("counter/decrement");
export const incrementByValue = createAction<number>(
  "counter/incrementByValue"
);
