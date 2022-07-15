import { createAction, nanoid } from "@reduxjs/toolkit";

export const addPost = createAction(
  "postsD/addPost",
  (title: string, authorId: string, content: string) => {
    const id = nanoid();
    return {
      payload: {
        id,
        title,
        content,
        authorId,
      },
    };
  }
);
