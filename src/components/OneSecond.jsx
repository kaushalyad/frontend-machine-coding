import { useEffect, useState } from "react";

const OneSecond = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000)

        console.log("hi useEffect")

        return (() => {
            clearInterval(intervalId);
            console.log("hi return");
        });
    }, [])
    return (<div>
        {`Initial Count ${count}`}
    </div>)
}

export default OneSecond;