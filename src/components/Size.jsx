import React from "react";
import useThrottledResize from "./useThrottledResize";

const Size = () => {
  const [width, height] = useThrottledResize(300);
  return <div>{`Size ${width}X${height}`}</div>;
};

export default Size;
