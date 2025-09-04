import { useEffect, useState } from "react";



const TestUseTimeOut = () => {
    const incrementByOne = () => {
        setCount((prev) => prev + 1)
    }
    const incrementByFive = () => {
        setCount((prev) => prev + 5)
    }
    const handleOneThousand = () => {
        setDelay(1000);
    }
    const handleTwoThousand = () => {
        setDelay(2000);
    }
    const [count, setCount] = useState(0);
    const [fn, setFn] = useState(() => incrementByOne);
    const [delay, setDelay] = useState(1000);
    useEffect(() => {
        let intervalId;
        intervalId = setInterval(fn, delay);
        return (()=>clearInterval(intervalId))
    }, [fn, delay])
    return (
        <div style={{ backgroundColor: "greenyellow", width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "50px" }}>
            <p>{count}</p>
            <div style={{ display: "flex", gap: "20px" }}>
                <button onClick={handleOneThousand}>Set the timer to 1000</button>
                <button onClick={handleTwoThousand}>Set the timer to 2000</button>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
                <button onClick={() => setFn(()=>incrementByOne)}>Function Change to One</button>
                <button onClick={() => setFn(()=>incrementByFive)}> Function Change to Five</button>
            </div>
        </div>
    )
}

export default TestUseTimeOut;