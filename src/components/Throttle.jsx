import React, { useEffect, useState } from 'react';

const Throttle = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const throttle = (fun, delay) => {
    let lastCall = 0;
    return function (...args) {
      let now = Date.now();
      if (now - lastCall >= delay) {
        fun(...args);
        lastCall = now;
      }
    };
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    const throttledResize = throttle(handleResize, 3000);

    window.addEventListener("resize", throttledResize);

    return () => {
      window.removeEventListener("resize", throttledResize);
    };
  }, []);

  return (
    <div>
      <p>{`width ${width} - height ${height}`}</p>
    </div>
  );
};

export default Throttle;
