import React from "react";
import { List } from "react-virtualized";

const Row = ({ index, style }) => (
  <div
    style={{
      ...style,
      width: "100%",
      height: "50px",
      display: "flex",
      alignItems: "center", // vertical center
      justifyContent: "center", // horizontal center
      backgroundColor: index % 2 == 0 ? "green" : "yellow",
      textAlign: "center",
      fontSize: "24px",
    }}
  >
    List {index + 1}
  </div>
);
const LargeListItems = () => {
  return (
    <div
      style={{
        width: "98vw",
        height: "98vh",
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
       
      >
        {
          <List
          width={490}
            height={482}
            rowCount={10000}
            rowHeight={50}
            rowRenderer={Row}
          />
        }
      </div>
    </div>
  );
};

export default LargeListItems;
