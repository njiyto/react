// eslint disable
import React, { useState } from 'react';

export default function Hooks() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <div> You clicked {count} times </div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}