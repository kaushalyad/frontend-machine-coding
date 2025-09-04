import React, { useState } from "react";

const Form = React.memo((props) => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(e.target);
  };
  return (
    <form
      style={{
        backgroundColor: "red",
        width: "600px",
        height: "600px",
        display: "flex",
        justifyContent: "between",
        alignItems: "center",
        flexDirection: "column",
        gap: "50px",
        paddingTop: "50px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submitted");
      }}
    >
      <div style={{ width: "90%" }}>
        <input
          style={{ width: "100%" }}
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        ></input>
      </div>
      <div style={{ width: "90%" }}>
        <input
          style={{ width: "100%" }}
          placeholder="Father's Name"
          name="fatherName"
          onChange={handleChange}
          value={formData.fatherName}
        ></input>
      </div>
      <div style={{ width: "90%" }}>
        <input
          style={{ width: "100%" }}
          placeholder="Mother's Name"
          onChange={handleChange}
          name="motherName"
          value={formData.motherName}
        ></input>
      </div>
      <div style={{ width: "90%" }}>
        <input
          style={{ width: "100%" }}
          placeholder="Phone No"
          onChange={handleChange}
          type="number"
          name="phone"
          value={formData.phone}
        ></input>
      </div>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "5px",
          borderRadius: "10px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
});

export default Form;
