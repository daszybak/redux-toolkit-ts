import Counter from "./features/counter/Counter";
import AddPost from "./features/posts/AddPostForm";
import PostsList from "./features/posts/Posts";

function App() {
  return (
    <div className="App">
      <Counter />
      <AddPost />
      <PostsList />
    </div>
  );
}

export default App;
