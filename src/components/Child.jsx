import React, { forwardRef, useState } from "react";

const Child = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <span>
        {`Child count is `}
        <span ref={ref}>{count}</span>
      </span>
      <button onClick={increment}>Increment</button>
    </>
  );
});

export default Child;
