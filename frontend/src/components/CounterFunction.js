import React from "react";
import { useState } from "react";

export default function CounterFunction() {
  let [number, setNumber] = useState(0);

  function increment() {
    setNumber(++number);
  }

  return (
    <div>
      <h3>Classbase Component</h3>
      <h1>Counter = {number}</h1>
      <button onClick={(e) => increment()}>Increment</button>
    </div>
  );
}
