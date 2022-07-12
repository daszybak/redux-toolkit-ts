import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.count += 1;
    },
    decrement: (state: CounterState) => {
      state.count -= 1;
    },
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
