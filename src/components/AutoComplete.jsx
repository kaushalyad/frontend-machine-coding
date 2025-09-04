import React from "react";
import { useState, useEffect } from "react";

const AutoComplete = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const suggestionsData = [
    "kaushal",
    "mohan",
    "sohan",
    "manish",
    "suneel",
    "sahil",
    "asjdsh",
  ];

  const [suggestions, setSuggestions] = useState([]);
  function findSuggetions(data, str) {
    const updatedData = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].toLowerCase().includes(str)) {
        updatedData.push(data[i]);
      }
    }
    return updatedData;
  }
  useEffect(() => {
    setSuggestions(findSuggetions(suggestionsData, value));
  }, [value,suggestions]);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          style={{
            height: "40px",
            width: "600px",
            fontSize: "30px",
            paddingLeft: "10px",
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value && (
          <span
            style={{
              color: "white",
              fontSize: "12px",
              cursor: "pointer",
              textAlign: "center",
              marginRight: "50px",
            }}
            onClick={() => setValue("")}
          >
            ✖️
          </span>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          {suggestions &&
            suggestions.map((data, index) => (
              <div
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => {
                  setValue(data);
                  setSuggestions([]);
                }}
              >
                {data}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AutoComplete;
