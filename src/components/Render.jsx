import axios from "axios";
import { useEffect, useState } from "react";


const Render = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const id = 1233442;
        const postData = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
                method: "patch",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: "mohan",
                })
            }).then((res) => res.json()).then((data) => {
                setData(data);
                console.log(data);
            }).catch((err) => {
                console.log(err);
            })

        }
        postData();
    }, []);

    return (<div>Render Page</div>)
}

export default Render;