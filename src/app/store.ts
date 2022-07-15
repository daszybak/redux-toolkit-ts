import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter-slice/counterSlice";
import { counterReducer as counter2 } from "../features/counter-divideAll/reducer";
import postsDReducer from "../features/posts-divideAll/reducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counter2,
    postsD: postsDReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
