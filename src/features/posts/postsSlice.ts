import { createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Post {
  id: string;
  title: string;
  content: string;
}

type Posts = Post[];

interface PostAdded {
  type: string;
  payload: Post;
}

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state: Posts, action: PostAdded) {
        state.push(action.payload);
      },
      prepare(title: string, content: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export default postsSlice.reducer;
export const selectAllPosts = (state: RootState) => state.posts;
export const { addPost } = postsSlice.actions;
