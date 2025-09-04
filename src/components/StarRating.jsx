import React, { useState } from "react";

const StarRating = () => {
  const [rated, setRated] = useState(-1);
  const [hovered, setHovered] = useState(-1);
  console.log(hovered);
  return (
    <div style={{ display: "flex", gap: "8px", fontSize: "24px" }}>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          return (
            <span
              key={i}
              onClick={() => setRated(i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(-1)}
              style={{ fontSize: "35px", cursor: "pointer", color: i <= (Math.max(hovered, rated)) ? "gold" : "gray" }}
            >
              ★
            </span>
          );
        })}
    </div>
  );
};

export default StarRating;
