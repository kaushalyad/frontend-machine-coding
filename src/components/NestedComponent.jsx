import { useState } from "react";
import uuid4 from "uuid4";

const data = [
    {
        id: uuid4(),
        name: "post1",
        comments: [
            {
                id: uuid4(),
                name: "comment1",
                replies: []
            }, {
                id: uuid4(),
                name: "comment2",
                replies: []
            }, {
                id: uuid4(),
                name: "comment3",
                replies: []
            }
        ]
    },
    {
        id: uuid4(),
        name: "post2",
        comments: []
    },
    {
        id: uuid4(),
        name: "post3",
        comments: []
    }
]
const NestedComponent = () => {
    const [postData, setPostData] = useState(data);
    const handleComments = (id) =>{
    }
    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: "white", color: "white", display: "flex", flexDirection: "column", gap: "65px", padding: "50px" }}>
            {
                postData.map((data, idx) => {
                    return (<div id={data.id} style={{ border: "4px solid green", display: "flex", flexDirection: "column", color: "black", padding: "5px", gap: "10px", padding: "5px" }}>
                        <div style={{ width: "100%", backgroundColor: "red", fontSize: "90px", color: "white" }}>{data.name}</div>
                        <div style={{ display: "flex", gap: "5px" }}>
                            <input></input>
                            <button onClick={() => handleComments(data.id)}>comment now</button>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}> {
                            data.comments.map((comment, idx) => {
                                return (<div key={comment.id} style={{ border: "2px solid gray", padding: "10px" }}>{comment.name}</div>)
                            })
                        }</div>
                    </div>)
                })
            }
        </div>
    );
};

export default NestedComponent;
