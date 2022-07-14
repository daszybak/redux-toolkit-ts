import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Counter {
  count: number;
}

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: Counter) => {
      state.count += 1;
    },
    decrement: (state: Counter) => {
      state.count -= 1;
    },
    incrementByAmount: (state: Counter, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    reset: (state: Counter) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
