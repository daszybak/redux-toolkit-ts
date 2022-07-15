import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { users } from "../../data/users";
import { addPost } from "./actions";

const AddPosts = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const handleTitleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAuthorOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAuthor(e.target.value);
  };

  const handleContentOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleFormOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPost(title, author, content));
    setContent("");
    setAuthor("");
    setTitle("");
  };

  const renderedUsers = users.map(({ id, name }) => {
    return (
      <option value={id} key={id}>
        {name}
      </option>
    );
  });

  return (
    <section>
      <h1>Add posts: Divide All</h1>
      <form onSubmit={handleFormOnSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleTitleOnChange}
          />
        </div>
        <div>
          <label htmlFor="user">Author: </label>
          <select
            name="user"
            id="user"
            value={author}
            onChange={handleAuthorOnChange}
          >
            <>
              <option value=""></option>
              {renderedUsers}
            </>
          </select>
        </div>
        <div>
          <label htmlFor="content">Post Content: </label>
          <textarea
            name="content"
            id="content"
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
export default AddPosts;
