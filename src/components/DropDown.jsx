 // Dropdown.jsx
import React, { useState } from "react";

const DropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
       <select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
       </select>
    </div>
  );
};

export default DropDown;
