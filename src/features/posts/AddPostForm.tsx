import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch();

  const handleTitleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleFormOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPost(title, content));
    setTitle("");
    setContent("");
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleFormOnSubmit}>
        <div>
          <label htmlFor="postTitle">Post Title: </label>
          <input
            type="text"
            name="postTitle"
            id="postTitle"
            value={title}
            onChange={handleTitleOnChange}
          />
        </div>
        <div>
          <label htmlFor="postContent">Post Content: </label>
          <textarea
            name="postContent"
            id="posContent"
            cols={30}
            rows={10}
            value={content}
            onChange={handleContentOnChange}
          ></textarea>
        </div>
        <button type="submit">Add Post</button>
      </form>
    </section>
  );
};
export default AddPostForm;
