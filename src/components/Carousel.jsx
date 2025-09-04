import { useState } from "react";


const Carousel = () => {
    const [index, setIndex] = useState(0);
    const imageSrc = ["https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
        "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
        "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
        "https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg"]
    const handleChangeIncrement = () => {
        if (index < imageSrc.length - 1) setIndex((prev) => prev + 1);
        else {
            setIndex(0);
        }
    }
    const handleChangeDecrement = () => {
        if (index > 0) setIndex((prev) => prev - 1);
        else {
            setIndex(imageSrc.length - 1);
        }
    }
    return (<div style={{ width: "100vw", height: "100vh", backgroundColor: "red", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: "500px", height: "430px", backgroundColor: "white", borderRadius: "10px", display: "flex", flexDirection: "column", gap: "50px", justifyContent: "space-between", padding: "10px" }}>
            <div style={{ width: "100%", height: "100%" }}><img style={{ width: "480px", height: "300px", borderRadius: "20px" }} src={imageSrc[index]}
                alt="GeeksforGeeks logo" /></div>
            <div style={{ display: "flex", justifyContent: "center", gap: "3px",flexDirection:"column" }}>
                <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                    <button style={{ width: "100px", border: "none", padding: "5px", color: "black" }} onClick={handleChangeDecrement}>prev</button> <button onClick={handleChangeIncrement} style={{ width: "100px", border: "none", padding: "5px", color: "black" }}>next</button>
                </div>
                <div style={{display:"flex",justifyContent:"center",fontSize:"15px",marginTop:"10px"}}>{`${index + 1} of ${imageSrc.length}`}</div>
            </div>
        </div>
    </div>)
}

export default Carousel;