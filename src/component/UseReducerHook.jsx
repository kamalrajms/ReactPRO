import React, { useState, useReducer } from "react";

export default function UseReducerHook() {
  //   const [count, setCount] = useState(0);
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "incerment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "Reset":
        return { count: 0 };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
      <button onClick={() => setCount(0)}>Reset</button> */}
      <h1>Count:{state.count}</h1>
      <button onClick={() => dispatch({ type: "incerment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
}
