import { createReducer } from "@reduxjs/toolkit";

import { increment, decrement, incrementByValue } from "./actions";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.count++;
    })
    .addCase(decrement, (state) => {
      state.count--;
    })
    .addCase(incrementByValue, (state, action) => {
      state.count += action.payload;
    });
});
