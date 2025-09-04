import { useState } from "react";


const PopUp = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    return (<div style={{ width: "100vw", height: "100vh", padding: "50px", justifyContent: "center", alignItems: "center" }}>
        <div style={{display:"flex",justifyContent:"center"}}>
            <button style={{ backgroundColor: "green", border: "none", paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", paddingBottom: "10px", borderRadius: "20px", color: "white" }}>Click Here</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", border: "3px solid green" }}>
            <div style={{ fontSize: "20px",backgroundColor:"green",padding:"20px" }}> Hi Kaushal How Are You</div>
            <div style={{ fontSize: "10px",padding:"10px",textAlign:"left" }}>Hey Mam how is going your day</div>
        </div>
    </div>)
}

export default PopUp;