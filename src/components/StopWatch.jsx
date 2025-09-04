import { useEffect, useState } from "react";


const StopWatch = () => {
    const [hrCount, setHrCount] = useState(0);
    const [minuteCount, setMinuteCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);
    const [running, setRunning] = useState(false);
    let intervalId;
    const handleReset = () => {
        clearTimeout(intervalId);
        setSecondCount(() => 0);
        setMinuteCount(() => 0);
        setHrCount(() => 0);
    }
    const handleStartStop = () => {
        setRunning(!running);
    }
    useEffect(() => {
        if (running) {
            intervalId = setTimeout(() => {
                setSecondCount((prev) => prev + 1)
            }, 10);
            setHrCount(() => Math.floor(secondCount / 3600));
            setMinuteCount(() => Math.floor(secondCount / 60));
        }
    }, [secondCount, running])
    return (<div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
        <div style={{ width: "500px", height: "80px", backgroundColor: "blue", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", paddingBottom: "10px", textAlign: "center" }}>
            <div style={{ backgroundColor: "white", fontSize: "40px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>{hrCount}</div>
            <div style={{ backgroundColor: "white", fontSize: "40px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>{minuteCount % 60}</div>
            <div style={{ backgroundColor: "white", fontSize: "40px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>{Math.floor(secondCount % 60)}</div>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
            <button style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: running ? "red" : "blue", color: "white", fontSize: "25px" }} onClick={handleStartStop}>{running ? "Stop" : "Start"}</button>
            <button style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", paddingBottom: "10px", fontSize: "25px" }} onClick={handleReset}>Reset</button>
        </div>
    </div>)
}

export default StopWatch;