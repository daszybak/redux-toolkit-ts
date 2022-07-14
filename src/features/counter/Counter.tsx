import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/store";
import { increment, decrement, incrementByAmount, reset } from "./counterSlice";

const Counter = () => {
  const [input, setInput] = useState<number>(0);
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const handleButtonOnIncrement = () => {
    dispatch(increment());
  };

  const handleButtonOnDecrement = () => {
    dispatch(decrement());
  };

  const handleButtonOnReset = () => {
    dispatch(reset());
  };

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(Number(event.target.value));
  };

  const handleFormOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(incrementByAmount(input));
    setInput(0);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>The count is: {count}</p>
      <div>
        <span>
          <button onClick={handleButtonOnIncrement}>Increase</button>
        </span>
        <span>
          <button onClick={handleButtonOnDecrement}>Decrease</button>
        </span>
      </div>
      <div>
        <form onSubmit={handleFormOnSubmit}>
          <label htmlFor="add">Increment by amount</label>
          <input
            type="number"
            name="add"
            onChange={handleInputOnChange}
            value={input}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <span>
        <button onClick={handleButtonOnReset}>Reset</button>
      </span>
    </div>
  );
};

export default Counter;
