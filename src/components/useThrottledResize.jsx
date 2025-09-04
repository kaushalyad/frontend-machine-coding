import React, { useEffect } from "react";

const useThrottledResize = (delay = 200) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  useEffect(() => {
    let timeoutId = null;
    const handleResize = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          setWidth(window.innerWidth);
          setHeight(window.innerHeight);
        }, delay);
        timeoutId = null;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [delay]);
  return [width, height];
};

export default useThrottledResize;
