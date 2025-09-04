import React, { useEffect, useState } from 'react';

const TrafficLight = () => {
    const [color, setColor] = useState(["red", "gray", "gray"]);
    useEffect(() => {
        let id;
        if (color[0] === "red") {
            id = setTimeout(() => {
                setColor(["gray", "yellow", "gray"]);
            }, 4000)
        }
        if (color[1] === "yellow") {
            id = setTimeout(() => {
                setColor(["gray", "gray", "green"]);
            }, 500)
        }
        if (color[2] === "green") {
            id = setTimeout(() => {
                setColor(["red", "gray", "gray"]);
            }, 3000)
        }
        return () => clearTimeout(id);
    }, [color])
    return (
        <div style={{ width: "95vw", height: "95vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "100px", height: "260px", backgroundColor: "black", borderRadius: "23px", display: "flex", flexDirection: "column", gap: "2px", textAlign: "center", justifyContent: "space-evenly", alignItems: "center" }}>
                <div style={{ backgroundColor: color[0], width: "75px", height: "75px", borderRadius: "100%" }}></div>
                <div style={{ backgroundColor: color[1], width: "75px", height: "75px", borderRadius: "100%" }}></div>
                <div style={{ backgroundColor: color[2], width: "75px", height: "75px", borderRadius: "100%" }}></div>
            </div>
        </div>
    );
};

export default TrafficLight;