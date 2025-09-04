import React from "react";

function SubmitInfo() {
  const handleSubmit = async () => {
    fetch("http://localhost:5000/proxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Kaushal Kumar Yadav",
        email: "kaushalsoftwareengineer@gmail.com",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Response:", data))
      .catch((err) => console.error("Error:", err));
  };

  return <button onClick={handleSubmit}>Submit Info</button>;
}

export default SubmitInfo;
