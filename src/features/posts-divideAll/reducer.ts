import { createReducer } from "@reduxjs/toolkit";
import { addPost } from "./actions";

interface Post {
  id: string;
  title: string;
  content: string;
  authorId?: string;
}

type Posts = Post[];

const initialState: Posts = [
  { id: "1", title: "Hello", content: "Welcome to Africa" },
  { id: "2", title: "Review", content: "Best burger in town" },
  { id: "3", title: "Car", content: "Driving a Porsche!" },
];

const postsDReducer = createReducer(initialState, (builder) => {
  builder.addCase(addPost, (state, action) => {
    state.push(action.payload);
  });
});

export default postsDReducer;
