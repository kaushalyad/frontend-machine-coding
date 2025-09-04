import { useEffect, useState } from "react";


const ProgressBar = () => {
    const [currentProgress, setCurrentProgress] = useState(10);
    useEffect(() => {
        let intervalId;
        if (currentProgress <= 990) {
            intervalId = setTimeout(() => {
                setCurrentProgress((prev) => prev + 10);
            }, 100)
        }
        else {
            return (() => clearTimeout(intervalId));
        }
    })
    return (<div style={{ margin: "50px" }}>
        <div>Progress Bar</div>
        <div style={{ width: "1000px", height: "40px", backgroundColor: "red", borderRadius: "20px", marginTop: "30px", display: "flex" }}>
            <div style={{ backgroundColor: "green", width: `${currentProgress}px`, height: "40px", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", display: "flex", justifyContent: "flex-start", paddingLeft: "20px", alignItems: "center", fontSize: "30px", borderBottomRightRadius: currentProgress === 1000 ? "20px" : "", borderTopRightRadius: currentProgress === 1000 ? "20px" : "", position: "fixed" }}>{currentProgress / 10}</div>
        </div>
    </div>)
}

export default ProgressBar;