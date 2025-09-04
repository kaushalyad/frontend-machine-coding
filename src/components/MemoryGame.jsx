import { useEffect, useState } from "react";

const MemoryGame = () => {
    const [size, setSize] = useState(3);
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [setu, setSetu] = useState(new Set([]));
    const [queue, setQueue] = useState([]);
    const [won, setWon] = useState(false);
    const [noOfMoves, setNoOfMoves] = useState(size * size * size);
    const randomSetData = (n) => {
        let arr = [];
        let start = 1;
        let i = 0;
        while (i < n * n) {
            arr[i] = start;
            arr[i + 1] = start;
            start++;
            i += 2;
        }
        i = n * n * n * n * n;
        while (i) {
            let idx1 = Math.floor(Math.random() * (n * n));
            let idx2 = Math.floor(Math.random() * (n * n));
            [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
            i--;
        }
        setData(arr);
        setWon(false);
        setQueue([]);
        setSetu(new Set([]));
        setNoOfMoves(size * size * size)
    }
    const handleClick = (i) => {
        setNoOfMoves((prev) => prev - 1);
        if (count % 2 === 0 && queue.length < data.length) {
            let temp = new Set([...setu]);
            let val = [...queue];
            temp.add(i);
            val.push(i);
            setQueue(val);
            setSetu(temp);
            setCount((prev) => prev + 1);
        }
        else if (count % 2 != 0 && queue.length < data.length) {
            let temp = [...queue];
            let second = temp.pop();
            console.log(i, " ", queue);
            let val = new Set([...setu]);
            if (data[i] === data[second] && i != second) {
                temp.push(second);
                temp.push(i);
                val.add(i);
                setSetu(val);
                setQueue(temp);
                setCount((prev) => prev + 1);
                if (queue.length === data.length - 1) setWon(true);
            }
        }
    }
    useEffect(() => {
        randomSetData(size);
    }, [size])

    console.log(won);
    return (<div style={{ minWidth: "93vw", minHeight: "88vh", padding: "30px", display: "flex", justifyContent: "space-evenly", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <p style={{ fontSize: "35px" }}>Memory Game</p>

            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}><span>Grid Size : </span>
                    <input onChange={(e) => setSize(e.target.value)} type="number" value={size} style={{ width: "55px", height: "30px", outline: "none", border: "2px solid black", fontSize: "20px", textAlign: "center", borderRadius: "5px" }}></input>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}><span>Set Max Moves You Want to Make : </span>
                    <input onChange={(e) => setNoOfMoves(e.target.value)} type="number" value={noOfMoves} style={{ width: "55px", height: "30px", outline: "none", border: "2px solid black", fontSize: "20px", textAlign: "center", borderRadius: "5px" }}></input>
                </div>
            </div>
        </div>
        {
            queue.length === data.length && (
                <div style={{ color: "green", fontSize: "50px" }}>You are Winner!</div>
            )
        }
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${size}, 90px)`, marginTop: "20px", gap: "30px", rowGap: "30px", columnGap: "30px", justifyContent: "center" }}>
            {
                data.map((num, idx) => {
                    return (<div onClick={() => {
                        if (noOfMoves > 0) {
                            handleClick(idx)
                        }
                    }} key={idx} style={{
                        width: "80px", height: "80px", backgroundColor: won
                            ? "green"
                            : setu.has(idx)
                                ? "blue"
                                : "gray", borderRadius: "10px", cursor: "pointer", color: "white", textAlign: "center", fontSize: "25px", display: "flex", justifyItems: "center", alignItems: "center"
                    }}><div style={{ width: "100%" }}>{
                        (setu.has(idx) ? num : "?")
                    }</div></div>)
                })
            }
        </div>
        {
            noOfMoves <= 0 && (
                <div style={{ color: "red", fontSize: "50px" }}>Game Over!</div>
            )
        }
        <button onClick={() => randomSetData(size)} style={{ width: "150px", backgroundColor: "green", color: "white", height: "40px", border: "none", borderRadius: "3px", cursor: "pointer", fontSize: "15px" }}>{won ? "Play Again" : "Reset Game"}</button>
    </div>)
}

export default MemoryGame;