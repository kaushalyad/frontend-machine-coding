import { useEffect, useState } from "react";


const TicTacToe = () => {
    const [matrix, setMatrix] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
    const [count, setCount] = useState(0);
    const [winnerText, setWinnerText] = useState("");
    const handleChange = (idx) => {
        const updatedMatrix = [...matrix];

        if (updatedMatrix[idx] === " ") {
            if (count % 2 === 0) {
                updatedMatrix[idx] = "X";
            } else {
                updatedMatrix[idx] = "O";
            }

            setMatrix(updatedMatrix);
            setCount(count + 1);

        }
    }
    const firstCheck = () => {
        if (matrix[0] === matrix[3] && matrix[3] === matrix[6] && matrix[3] === "X") return true;
        if (matrix[1] === matrix[4] && matrix[1] === matrix[7] && matrix[1] === "X") return true;
        if (matrix[2] === matrix[5] && matrix[2] === matrix[7] && matrix[2] === "X") return true;
        if (matrix[0] === matrix[4] && matrix[0] === matrix[8] && matrix[0] === "X") return true;
        if (matrix[2] === matrix[4] && matrix[2] === matrix[6] && matrix[2] === "X") return true;
        return false;
    }
    const secondCheck = () => {
        if (matrix[0] === matrix[3] && matrix[3] === matrix[6] && matrix[3] === "O") return true;
        if (matrix[1] === matrix[4] && matrix[1] === matrix[7] && matrix[1] === "O") return true;
        if (matrix[2] === matrix[5] && matrix[2] === matrix[7] && matrix[2] === "O") return true;
        if (matrix[0] === matrix[4] && matrix[0] === matrix[8] && matrix[0] === "O") return true;
        if (matrix[2] === matrix[4] && matrix[2] === matrix[6] && matrix[2] === "O") return true;
        return false;
    }
    const chechDraw = () => {
        let flag = true;
        matrix.map((item, idx) => {
            if (item === " ") flag = false;
        })
        return flag;
    }
    useEffect(() => {
        if (chechDraw() === true) setWinnerText("Match Draw");
        if (firstCheck() === true) setWinnerText("First Person Won the match");
        if (secondCheck() === true) setWinnerText("Second Person Won the match");
    }, [matrix])
    console.log(matrix);
    return (<div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
        {
            winnerText && (<p style={{ color: "red", fontSize: "50px" }}>{winnerText}</p>)
        }
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
            {
                matrix.map((item, i) => {
                    return <div onClick={() => handleChange(i)} style={{ width: "60px", height: "60px", backgroundColor: "red", color: "black", fontSize: "60px", color: "white", textAlign: "center" }}>{item}</div>
                })
            }
        </div>
    </div>)
}

export default TicTacToe;