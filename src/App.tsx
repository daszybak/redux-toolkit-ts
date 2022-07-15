import CounterDivide from "./features/counter-divideAll/Counter";
import CounterSlice from "./features/counter-slice/Counter";
import AddPost from "./features/posts/AddPostForm";
import PostsList from "./features/posts/Posts";

function App() {
  return (
    <div className="App">
      <CounterSlice />
      <CounterDivide />
      <AddPost />
      <PostsList />
    </div>
  );
}

export default App;
