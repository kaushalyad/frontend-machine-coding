import { useState } from "react";

const Navbar = () => {
    const navData = ["Option 1", "Option 2", "Option 3", "Option 3", "Option 4", "Option 5"];
    const [selected, setSelected] = useState(0);
    const handleChange = (index) => {
        setSelected(index);
    }
    return (<div style={{ backgroundColor: "blue", height: "80px" }}>
        <div style={{ display: "flex", gap: "20px", height: "100%", alignItems: "center", paddingLeft: "20px" }}>
            {
                navData.map((item, index) => <div onClick={()=>handleChange(index)} style={{ color: "white", fontSize: "20px", textDecoration: selected === index ? "underline" : "",cursor:"pointer" }}>{item}</div>)
            }
        </div>
    </div>)
}

export default Navbar;