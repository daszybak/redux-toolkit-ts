import { useSelector } from "react-redux";

import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map(({ title, id, content }) => {
    return (
      <article key={id}>
        <h3>{title}</h3>
        <p>{content.substring(0, 100)}</p>
      </article>
    );
  });

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
