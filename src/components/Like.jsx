import { useState } from "react";


const Like = () => {
    const [liked, setLiked] = useState(false);
    const [data, setData] = useState("");

    const postData = () => {
        fetch('https://questions.greatfrontend.com/api/questions/like-button', {
            method: "POST",
            headers: { "Content-Type": "application/json" },

            // body: {
            //     name: "kaushal"
            // }
        }).then((res) => res.json()).then((data) => {
            setData(data);
            alert("hi sir you liked")
        }).catch((err) => {
            console.log("error", err);

        })
    }
    const handleChange = () => {
        postData();
    }
    return (<div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div onClick={handleChange} style={{ cursor: "pointer" }}>
            Like
        </div>
    </div>)
}

export default Like;