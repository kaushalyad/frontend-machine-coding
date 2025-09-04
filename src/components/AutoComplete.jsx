import React from "react";
import { useCallback } from "react";
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
  const debounce = (fn, delay) => {
    let id;
    return function (...fn) {
      clearTimeout(id);
      setTimeout(() => {
        fn();
      }, delay);
    }
  }
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
  }, []);
  const search = (e) => {
    findSuggetions(suggestionsData, e.target.value)
  }
  const searchHandler = useCallback(debounce(search, 3000), [value]);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px"
        }}
      >
        <input
          style={{
            height: "40px",
            width: "600px",
            fontSize: "30px",
            paddingLeft: "10px",
          }}
          onChange={searchHandler}
        />
        {value && (
          <span
            style={{
              color: "white",
              fontSize: "20px",
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
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "5px" }}>
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
