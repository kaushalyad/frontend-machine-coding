import { useState } from "react"

const Pagination = () => {
    const [data, setData] = useState(Array(105).fill(0));
    const [start, setStart] = useState(1);
    const handleChange = (idx) => {
        setStart(idx);
    }
    return (<div style={{ padding: "20px", display: "flex", gap: "20px", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

        <div style={{ display: "flex", gap: "10px", flexDirection: "column", borderRadius: "2px" }}>
            {
                Array(10).fill(0).map((__, i) => {
                    return (<div style={{ width: "800px", height: "35px", border: "2px solid green", borderRadius: "2px", display: "flex", alignItems: "center", fontWeight: "10px", padding: "10px" }}>{`Item ${10 * (start - 1) + 1 + i}`}</div>)
                })
            }
        </div>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center" }}>
            {
                Array(10).fill(0).map((__, i) => {
                    return (<div onClick={() => handleChange(i + 1)} style={{ backgroundColor: i == start - 1 ? "green" : "white", border: "1px solid blue", width: "45px", height: "45px", borderRadius: "4px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>{i + 1}</div>)
                })
            }
        </div>
    </div>)
}

export default Pagination;