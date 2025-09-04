import { useState } from "react";


const CustomSorting = () => {
    const data = [{
        name: "Kaushal Kumar Yadav",
        age: 24,
        solved: 35,
    }, {
        name: "Nitish Kumar Yadav",
        age: 19,
        solved: 45,
    }, {
        name: "Shubhi Dixit",
        age: 28,
        solved: 5,
    }, {
        name: "Nikee Kumari",
        age: 30,
        solved: 0,
    }, {
        name: "Ramu Devi",
        age: 45,
        solved: 0,
    }, {
        name: "Tribhuvan Yadav",
        age: 54,
        solved: 9,
    }, {
        name: "Anjali Kumari",
        age: 23,
        solved: 8,
    }]
    const [ownData, setOwnData] = useState([...data]);
    const sortOnAge = () => {
        const updated = ownData.sort((a, b) => a.age - b.age);
        setOwnData([...updated]);
    }
    const sortOnName = () => {
        const updated = ownData.sort((a, b) => a.name.localeCompare(b.name));
        setOwnData([...updated]);
    }
    const sortOnProblemSolved = () => {
        const updated = ownData.sort((a, b) => a.solved - b.solved);
        setOwnData([...updated]);
    }
    console.log(ownData);
    return (
        <div style={{ backgroundColor: "red", width: "100vw", height: "100vh", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "50vw", height: "100%", backgroundColor: "white", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", backgroundColor: "green", height: "50px", width: "100%", color: "white", alignItems: "center", fontSize: "18px", padding: "10px" }}>
                    <div onClick={sortOnName} style={{ cursor: "pointer", }}>Name</div>
                    <div onClick={sortOnAge} style={{ cursor: "pointer" }}>Age</div>
                    <div onClick={sortOnProblemSolved} style={{ cursor: "pointer" }}>No Of Problems Solved</div>
                </div>
                {
                    ownData.map((obj, index) => {
                        return (<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", height: "50px", width: "100%", color: "white", alignItems: "center", backgroundColor: index % 2 == 0 ? "orange" : "blue", padding: "10px" }}>
                            <div>{obj.name}</div>
                            <div>{obj.age}</div>
                            <div>{obj.solved}</div>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default CustomSorting;