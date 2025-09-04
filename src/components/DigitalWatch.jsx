import { useEffect, useState } from "react";


const DigitalWatch = () => {
    const [watchHr, setWatchHr] = useState(0);
    const [watchMinute, setWatchMinute] = useState(0);
    const [watchSecond, setwatchSecond] = useState(0);
    const intervalId = setInterval(() => {
        const date = new Date();
        setWatchHr(() => date.getHours());
        setWatchMinute(() => date.getMinutes());
        setwatchSecond(() => date.getSeconds());
    }, 1000)

    return (<div style={{ width: "100vw", height: "100vh", backgroundColor: "green", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: "530px", height: "150px", backgroundColor: "black", display: "flex", gap: "10px", justifyContent: "space-between", border: "10px solid gray", borderRadius: "20px", alignItems: "center" }}>
            <div className="digital-clock" style={{ width: "100%", fontSize: "90px" }}>{watchHr}:</div>
            <div className="digital-clock" style={{ width: "100%", fontSize: "90px" }}>{watchMinute}:</div>
            <div className="digital-clock" style={{ width: "100%", fontSize: "90px" }}>{watchSecond}</div>
        </div>

    </div>)
}

export default DigitalWatch;