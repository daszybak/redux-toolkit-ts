import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import counterReducer from "../features/counter-slice/counterSlice";
import { usersReducer } from "../features/users/usersSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
