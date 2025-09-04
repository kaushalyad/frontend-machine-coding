import { useEffect, useState } from "react";

const GridRemoval = () => {
    const [data, setData] = useState(Array(9).fill("green")); // 9 green boxes
    const [clickedOrder, setClickedOrder] = useState([]); // store click order
    const [remove, setRemove] = useState(false);

    const handleChange = (idx) => {
        if (data[idx] === "green" && !remove) {
            const updatedData = [...data];
            updatedData[idx] = "red";
            setData(updatedData);

            setClickedOrder((prev) => [...prev, idx]);

            // If all are red → trigger removal
            if (clickedOrder.length + 1 === data.length) {
                setRemove(true);
            }
        }
    };

    useEffect(() => {
        let intervalId;

        if (remove) {
            let i = clickedOrder.length; // start from last clicked
            intervalId = setInterval(() => {
                setData((prev) => {
                    const updated = [...prev];
                    updated[clickedOrder[i]] = "green"; // turn back green
                    return updated;
                });

                if (i === 0) {
                    setRemove(false);
                    setClickedOrder([]);
                    clearInterval(intervalId); // ✅ stop AFTER the first clicked is updated
                }
                i--;
            }, 1000);
        }

        return () => clearInterval(intervalId);

    }, [remove, clickedOrder]);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gap: "8px",
                    padding: "50px",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    width: "600px",
                }}
            >
                {data.map((color, index) => (
                    <div
                        key={index}
                        onClick={() => handleChange(index)}
                        style={{
                            backgroundColor: color,
                            width: "150px",
                            height: "150px",
                            cursor: remove ? "not-allowed" : "pointer",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default GridRemoval;
