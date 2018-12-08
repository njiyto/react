/* eslint-disable */
import React, { useState, useEffect } from 'react';

export default function UseState() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <div> You clicked {count} times </div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <div> You clicked {count2} times </div>
      <button onClick={() => setCount2(count2 + 1)}>
        Click me
      </button>
    </div>
  );
}