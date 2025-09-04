import { useState, useEffect, useRef } from "react";
const Modal = () => {
    const [open, setOpen] = useState(false);
    const Ref = useRef(null);
    const handler = () => {
        setOpen(!open);
    }
    useEffect(() => {
        const outsideHandler = (e) => {

            if (Ref.current && !Ref.current.contains(e.target)) {
                setOpen(false);
            }
        }
        if (open) document.addEventListener("mousedown", outsideHandler);
        return () => { document.removeEventListener("mousedown", outsideHandler) };

    }, [open])
    return (<div style={{ backgroundColor: open ? "rgb(185, 185, 122)" : "yellow", width: "100vw", height: "100vh", padding: "10px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
        <button onClick={handler} style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", borderRadius: "2px", border: "none", width: "80px" }}>Open</button>
        <div ref={Ref} style={{ display: open ? "" : "none", backgroundColor: "white", width: "500px", height: "300px", marginTop: "10px" }}></div>
    </div>)
}

export default Modal;