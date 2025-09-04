import { useState } from "react";
const AccordianList = ({ title, content }) => {
    const [open, setOpen] = useState(false);
    const handler = () => {
        setOpen(!open);
    }
    return (
        <div style={{ display: "flex", justifyContent: "left", flexDirection: "column" }} onClick={handler}>
            <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
                <div style={{ fontSize: "25px" }}>{title}</div>
                {open ? <button style={{ border: "none", backgroundColor: "white" }}>⬆️</button> : <button style={{ border: "none", backgroundColor: "white" }}>⬇️</button>}
            </div>
            <div style={{ display: !open ? "none" : "" }}>{content}</div>
        </div>
    )
}
const Accordian = () => {
    return (
        <div>
            <AccordianList title={"Hindustan Cost "} content={"there is not shortcut for success is there any method available"} />
            <AccordianList title={"Hindustan Cost "} content={"there is not shortcut for success is there any method available"} />
            <AccordianList title={"Hindustan Cost "} content={"there is not shortcut for success is there any method available"} />
            {Date.now()}
        </div>
    )
}


export default Accordian;