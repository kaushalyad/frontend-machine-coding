import { useState } from "react";
import { uuid4 } from "uuid4";
import RenderData from "./RenderData";
const NestedFolder = () => {

    const [folderStr, setFolderStr] = useState({
        "id": uuid4(),
        "name": "root",
        "isFolder": true,
        "items": [
            {
                "id": uuid4(),
                "name": "public",
                "isFolder": true,
                "items": [
                    {
                        "id": uuid4(),
                        "name": "public nested 1",
                        "isFolder": true,
                        "items": [
                            {
                                "id": uuid4(),
                                "name": "index.html",
                                "isFolder": false,
                                "items": []
                            },
                            {
                                "id": uuid4(),
                                "name": "hello.html",
                                "isFolder": false,
                                "items": []
                            }
                        ]
                    },
                    {
                        "id": uuid4(),
                        "name": "public_nested_file",
                        "isFolder": false,
                        "items": []
                    }
                ]
            },
            {
                "id": uuid4(),
                "name": "src",
                "isFolder": true,
                "items": [
                    {
                        "id": uuid4(),
                        "name": "App.js",
                        "isFolder": false,
                        "items": []
                    },
                    {
                        "id": uuid4(),
                        "name": "Index.js",
                        "isFolder": false,
                        "items": []
                    },
                    {
                        "id": uuid4(),
                        "name": "styles.css",
                        "isFolder": false,
                        "items": []
                    }
                ]
            },
            {
                "id": uuid4(),
                "name": "package.json",
                "isFolder": false,
                "items": []
            }
        ]
    });


    return (
        <div style={{ width: "90vw", height: "80vh", backgroundColor: "green", display: "flex", flexDirection: "column", gap: "50px", padding: "50px" }}>
            <div style={{ fontSize: "40px", color: "white" }}>
                File Explorer
            </div>
            <div>
                {
                    <RenderData data={folderStr} setData={setFolderStr} originalData={folderStr} />
                }
            </div>
        </div>)
}

export default NestedFolder;