import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Post {
  id: string;
  title: string;
  content: string;
  userId?: string;
}

type Posts = Post[];

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
      reducer(state: Posts, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      prepare(title: string, content: string, userId: string) {
        const id = nanoid();
        return {
          payload: {
            id,
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export default postsSlice.reducer;
export const selectAllPosts = (state: RootState) => state.posts;
export const { addPost } = postsSlice.actions;
