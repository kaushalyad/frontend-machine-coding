import { useState } from "react"

const Css = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);


    const addTask = () => {
        if (task.length) {
            setTasks((prev) => [...prev, { task: task, isCompleted: false }]);
            setTask("");
        }
    }
    const removeTask = (index) => {
        const updatedTasks = tasks.filter((__, idx) => idx != index);
        setTasks(updatedTasks);
        console.log(updatedTasks);
    }
    const handleCheck = (index) => {
        const updatedTasks = tasks;
        updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
        console.log(updatedTasks);
        setTasks([...updatedTasks]);
    }
    return (
        <>
            <div style={{ width: "100%", height: "100%", backgroundColor: "blue" }}>
                <p style={{ width: "100%", textAlign: "center", color: "white" }}>TO-DO APP</p>
            </div>
            <div style={{ marginTop: "50px", width: "100%", display: "flex", justifyContent: "center" }}>
                <div>
                    <input placeholder="Add Task" onChange={(e) => setTask(e.target.value)} style={{ width: "800px", height: "40px", fontSize: "25px", paddingLeft: "10px" }}></input>
                    <button onClick={addTask} style={{ paddingLeft: "8px", paddingRight: "8px", paddingTop: "10px", paddingBottom: "10px", color: "white", backgroundColor: "blue", border: "none", marginLeft: "5px", fontSize: "17px", borderRadius: "10px", cursor: "pointer" }}>+Add Task</button>
                </div>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "900px", display: "flex", justifyContent: "left", flexDirection: "column", gap: "10px", marginTop: "30px" }}>
                    {
                        tasks.map((task, index) => {
                            return <div key={index} style={{ fontSize: "30px", display: "flex", minWidth: "100px", justifyContent: "space-between" }}>
                                <input type="checkbox" value={task} onChange={(e) => handleCheck(index)} checked={task.isCompleted} style={{ width: "22px" }} />
                                <span style={{ textDecoration: task.isCompleted ? 'line-through' : "none" }}>{task.task}</span>
                                {
                                    task.isCompleted && <div style={{ backgroundColor: "green", paddingLeft: "15px", paddingRight: "15px", color: "white", fontSize: "10px", textAlign: "center", borderRadius: "15px", paddingTop: "10px", paddingBottom: "10px" }}>completed</div>
                                }
                                <button onClick={() => removeTask(index)} style={{ border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>X</button>
                            </div>
                        }
                        )
                    }
                </div>
            </div>
        </>);
}

export default Css;