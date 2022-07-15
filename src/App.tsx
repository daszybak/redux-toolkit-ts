import CounterDivide from "./features/counter-divideAll/Counter";
import CounterSlice from "./features/counter-slice/Counter";
import AddPosts from "./features/posts-divideAll/AddPosts";
import Posts from "./features/posts-divideAll/Posts";

function App() {
  return (
    <div className="App">
      <CounterSlice />
      <CounterDivide />
      <AddPosts />
      <Posts />
    </div>
  );
}

export default App;
