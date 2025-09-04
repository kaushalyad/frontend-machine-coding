import { useState } from "react";

const Tracker = () => {
    const [current, setCurrent] = useState(0);
    const [data, setData] = useState([{
        name: "Submitted",
        id: 1
    }, {
        name: "Interview",
        id: 2
    },
    {
        name: "Offer",
        id: 3
    }, {
        name: "Pre-onboard",
        id: 4
    }, {
        name: "Hired",
        id: 5
    }
    ])
    return (<div style={{ display: "flex", flexDirection: "column", gap: "50px", justifyContent: "center", alignItems: "center" }}>
        <div>
            <p style={{ color: "black", fontSize: "30px" }}>Tracker</p>
        </div>
        <div style={{ display: "flex" }}>
            {
                data.map((item, index) => {
                    return (<div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "10px" }}>
                        <div key={item.id} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><div style={{ borderRadius: "100%", backgroundColor: current >= index ? "green" : "gray", width: "50px", height: "50px", color: "white", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "27px" }}><div>{item.id}</div></div>
                            {
                                index < data.length - 1 && (<div style={{ width: "120px", borderBottom: current > index ? "7px solid green" : "2px solid gray" }}></div>)
                            }
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-start" }}>{item.name}</div>
                    </div>)
                })
            }
        </div>
        <div>
            <button onClick={() => { if (current < data.length - 1) { setCurrent(current + 1) } }} style={{ width: "130px", border: "none", backgroundColor: "green", color: "white", paddingTop: "5px", paddingBottom: "5px", borderRadius: "5px", cursor: "pointer" }}>Next</button>
        </div>
    </div>)
}

export default Tracker;