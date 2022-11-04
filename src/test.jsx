import React from 'react'
import { useState } from 'react';

function Test() {
  const [Count, setCount] = useState(0);
  console.log("Parent rendered");
  return (
    <div className="wrap">
      <button onClick={() => setCount(Count + 1)}>Increase</button>

      <p>Count:{Count}</p>

      
    </div>
  );
}

export default Test;