"use client";
import { useState } from "react";
function Counter({ user }) {
  console.log(user);
  const [count, setCount] = useState(1);
  return (
    <div>
      {user && <h2>user</h2>}
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
  );
}

export default Counter;
