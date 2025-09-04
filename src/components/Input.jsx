import { useEffect, useRef, useState } from "react";


const Input = () => {
    const [focusIndex, setFocusIndex] = useState(0);
    const [input, setInput] = useState([]);
    const inputFocus = useRef([]);
    const handleChange = (e) => {
        setFocusIndex((prev) => prev + 1);
        setInput((prev) => [...prev, e.target.value]);
    }
    const handleSubmit = () => {
        console.log(input);
        alert("submitted the otp");
    }

    useEffect(() => {
        if (focusIndex <= 3) {
            inputFocus.current[focusIndex].focus();
        }
    }, [input])
    return (<div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ backgroundColor: "rgb(200,82,82)", width: "600px", height: "400px", display: "flex", justifyContent: "center", alignItems: "center", gap: "40px", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: "10px" }}>
                {
                    Array(4).fill(0).map((__, index) => {

                        return <input
                            type="number"
                            className="no-spinner"
                            ref={(el) => (inputFocus.current[index] = el)}
                            disabled={!(index === focusIndex)}
                            onChange={handleChange}
                            style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "10px",
                                fontSize: "35px",
                                textAlign: "center",
                                border: "none"
                            }}
                        />

                    })
                }
            </div>
            <button disabled={!(input.length === 4)} style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", color: "white", backgroundColor: input.length === 4 ? "blue" : "rgb(137,137,185)", borderRadius: "5px", border: "none", fontSize: "19px", cursor: input.length == 4 ? "pointer" : "not-allowed" }} onClick={handleSubmit}>Submit</button>
            {
                input.length === 4 && (
                    <div style={{ display: "flex" }}>
                        {
                            input.map((item, index) => {
                                return (<div key={index}>{`${item}   `}</div>)
                            })
                        }
                    </div>
                )
            }
        </div>
    </div>)
}

export default Input;