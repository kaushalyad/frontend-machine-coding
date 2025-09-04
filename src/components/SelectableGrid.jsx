import { useCallback, useState } from "react";

const SelectableGrid = () => {
    const [size, setSize] = useState(10);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [selectedBoxes, setSelectedBoxes] = useState([]);
    const [count, setCount] = useState(0);
    const handleMouseDown = (boxNumber) => {
        setIsMouseDown(true);
        setSelectedBoxes([boxNumber]);
    }

    const handleMouseEnter = useCallback((boxNumber) => {
        // console.log("mouseenter", boxNumber);
        console.log("useCallback count", count)
        setCount((count) => count + 1);
        if (isMouseDown) {
            let selected = [];
            let start = selectedBoxes[0];
            let end = boxNumber;
            let startRow = Math.floor((start + size - 1) / size);
            let startCol = start % size == 0 ? size : start % size;
            let endRow = Math.floor((end + size - 1) / size);
            let endCol = end % size == 0 ? size : end % size;
            // console.log("starRow", startRow, "startCol", startCol, "endRow", endRow, "endCol", endCol);
            for (let i = Math.min(startRow, endRow); i <= Math.max(startRow, endRow); i++) {
                for (let j = Math.min(startCol, endCol); j <= Math.max(startCol, endCol); j++) {
                    selected.push((i - 1) * size + j);
                }
            }
            setSelectedBoxes(selected);
        }
    }, [isMouseDown])

    const handleMouseUp = () => {
        setIsMouseDown(false);
    }
    console.log("original count", count);
    return (<div onMouseUp={handleMouseUp} style={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center", alignItems: "center", padding: "50px" }}>
        <div style={{ fontSize: "50px" }}>Selectable Grid</div>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${size}, 1fr)`, gap: "4px" }}>
            {
                Array(size * size).fill(0).map((item, i) => {
                    return (<div key={i} onMouseEnter={() => handleMouseEnter(i + 1)} onMouseDown={() => handleMouseDown(i + 1)} style={{ width: "40px", height: "40px", backgroundColor: selectedBoxes.includes(i + 1) ? "red" : "green", borderRadius: "3px", color: "white", fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}><div style={{ display: "flex", justifyItems: "center", alignItems: "center" }}>{i + 1}</div></div>)
                })
            }
        </div>
    </div>)
}

export default SelectableGrid;