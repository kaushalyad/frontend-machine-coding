import { useEffect, useState } from "react";

const Toastify = ({ stat = false }) => {
    const [open, setOpen] = useState(true);
    useEffect(() => {
        let id = setTimeout(() => {
            setOpen(() => false);
        }, 100);
        return () => clearTimeout(id);
    }, [])

    return (
        <div style={{ display: open ? " " : "none", top: "10px", marginLeft: "40%",padding:"10px" }}>
            <div style={{ width: "350px", height: "35px", backgroundColor: "green", color: "white", borderRadius: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "10px", paddingRight: "10px" }}>
                <div>Successfully added the item to cart</div>
                <div style={{ cursor: "pointer" }} onClick={() => setOpen(false)}>X</div>
            </div>
        </div>)
}

export default Toastify;