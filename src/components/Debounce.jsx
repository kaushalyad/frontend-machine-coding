import { useCallback, useState } from "react";


const Debounce = () => {
  const [value, setValue] = useState();
  const debounce = (fun, delay) => {
    let intervalId;
    return function (...args) {
      clearTimeout(intervalId);
      intervalId = setTimeout(() => {
        fun(...args);
      }, delay)
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handler = useCallback(debounce(handleChange, 5000), [])

  return (<div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "50px" }}>
    <div style={{ width: "200px", height: "100px" }}>
      <input onChange={handler} style={{ width: "350px", height: "30px", fontSize: "20px" }}></input>
      {
        value && (<div style={{ marginTop: "10px" }}>{`input value : ${value}`}</div>)
      }
    </div>
  </div>)
}

export default Debounce;