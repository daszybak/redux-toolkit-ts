import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "./actions";
import { countSelector } from "./selectors";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(countSelector);
  const [add, setAdd] = useState(0);

  const handleIncrementOnClick = () => {
    dispatch(increment());
  };

  const handleDecrementOnClick = () => {
    dispatch(decrement());
  };

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdd(Number(e.target.value));
  };

  const handleAddOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(incrementByValue(add));
    setAdd(0);
  };

  return (
    <section>
      <h1>Counter Divide All</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrementOnClick}>Increment</button>
      <button onClick={handleDecrementOnClick}>Decrement</button>
      <form onSubmit={handleAddOnSubmit}>
        <label htmlFor="add">Add: </label>
        <input
          type="number"
          name="add"
          id="add"
          value={add}
          onChange={handleInputOnChange}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
export default Counter;
