import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { addPost } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  const users = useSelector(selectAllUsers);

  const handleTitleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleAuthorOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(e.target.id);
  };

  const handleFormOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPost(title, content, userId));
    setTitle("");
    setContent("");
  };

  const renderedUserOptions = users.map(({ id, name }) => {
    return (
      <option value={id} key={id}>
        {name}
      </option>
    );
  });

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
          <label htmlFor="postAuthor">Author:</label>
          <select
            name="postAuthor"
            id="postAuthor"
            onChange={handleAuthorOnChange}
            value={userId}
          >
            <>
              <option value=""></option>
              {renderedUserOptions}
            </>
          </select>
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
