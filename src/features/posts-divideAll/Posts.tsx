import { useSelector } from "react-redux";
import { selectPosts } from "./selectors";

import { users } from "../../data/users";

const Posts = () => {
  const posts = useSelector(selectPosts);

  const renderedPosts = posts.map(({ id, title, authorId, content }) => {
    return (
      <article key={id}>
        <h2>{title}</h2>
        <h3>
          {authorId
            ? users.find((user) => user.id === authorId)?.name ?? "Anon"
            : "Anon"}
        </h3>
        <p>{content}</p>
      </article>
    );
  });

  return <div>{renderedPosts}</div>;
};
export default Posts;
