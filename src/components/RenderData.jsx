import { useEffect, useRef, useState } from "react";
import { uuid4 } from "uuid4";

const RenderData = ({ data, setData, originalData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [folderCreate, setFolderCreate] = useState(false);
    const [fileCreate, setFileCreate] = useState(false);
    const [inputFileName, setInputFileName] = useState("");
    const [inputFolderName, setInputFoldername] = useState("");
    const ref = useRef(null);
    const addData = (id, name, isFolder, obj) => {
        if (obj.id === id) {
            return {
                ...obj,
                items: [
                    ...obj.items,
                    {
                        id: uuid4(),
                        name,
                        isFolder,
                        items: []
                    }
                ]
            };
        }

        return {
            ...obj,
            items: obj.items.map((item) => addData(id, name, isFolder, item))
        };
    };

    const handleAdd = (id, name, isFolder) => {
        const updated = addData(id, name, isFolder, originalData);
        setData(updated);
    };
    const editFileOrFolderName = (id, data, name) => {
        if (id === data.id) {
            return { ...data, name: name };
        }
        return { ...data, items: data.items.map((item) => editFileOrFolderName(id, item, name)) }
    }
    const edithandler = (id, data) => {
        const name = prompt("Enter new name of folder");
        const updated = editFileOrFolderName(id, data, name);
        setData(updated);
    }
    const deleteFileOrFolder = (id, data) => {
        if (id === data.id) return null;
        return { ...data, items: data.items.map((item) => deleteFileOrFolder(id, item)).filter((item) => item != null) }
    }
    const deleteHandler = (id, data) => {
        const conf = confirm("are you sure you want to delete");
        if (conf) {
            const updated = deleteFileOrFolder(id, data);
            console.log("id", id);
            console.log(updated);
            if (updated) setData(updated);
            else {
                setData({});
            }
        }
    }
    useEffect(() => {
        const handleInputFocus = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                console.log("target", ref, e)
                setFolderCreate(false);
                setFileCreate(false);
            }
            console.log(ref)
        }
        document.addEventListener("mousedown", handleInputFocus);
        return () => document.removeEventListener("mousedown", handleInputFocus);
    }, [])
    if (Object.keys(data).length === 0) return <div style={{ fontSize: "40px", color: "white" }}>No File Present!</div>
    return (
        <div ref={ref} style={{ paddingLeft: "20px", color: "white" }}>
            <div style={{ display: "flex", gap: "10px" }}>
                <div onClick={() => setIsOpen(!isOpen)} style={{ fontSize: "30px", cursor: "pointer" }}>
                    {data.isFolder && isOpen && ("📂 ")}
                    {
                        data.isFolder && !isOpen && ("📁 ")
                    }
                    {
                        !data.isFolder && ("📄 ")
                    }
                    {data.name}

                </div>
                {
                    data.isFolder && (<div style={{ display: "flex", marginLeft: "30px", gap: "15px", textAlign: "center", fontSize: "15px", alignItems: "center" }}>
                        {!folderCreate && !fileCreate && <div style={{ cursor: "pointer" }} onClick={() => { setFolderCreate(true) }}>📁+</div>}
                        {
                            folderCreate && <div style={{ cursor: "pointer" }} ><input onChange={(e) => {
                                setInputFoldername(e.target.value);

                            }
                            } style={{ width: "90px", outline: "none" }} /><span style={{ marginLeft: "5px", backgroundColor: "red", padding: "4px", borderRadius: "5px" }} onClick={() => { handleAdd(data.id, inputFolderName, true); setFolderCreate(false); setIsOpen(true) }}>create folder</span></div>
                        }
                        {!fileCreate && !folderCreate && <div style={{ cursor: "pointer" }} onClick={() => { setFileCreate(true) }}>📄+</div>}
                        {
                            fileCreate && <div style={{ cursor: "pointer" }} ><input onChange={(e) => setInputFileName(e.target.value)} style={{ width: "90px", outline: "none" }} /><span style={{ marginLeft: "5px", backgroundColor: "red", padding: "4px", borderRadius: "5px" }} onClick={() => { handleAdd(data.id, inputFileName, false); setFileCreate(false); setIsOpen(true) }}>create file</span></div>
                        }

                    </div>)
                }
                {
                    <div style={{ display: "flex", gap: "1px" }}>
                        <button title="Edit" onClick={() => edithandler(data.id, originalData)} style={{ backgroundColor: "green", border: "none", cursor: "pointer", fontSize: "18px" }}>✏️</button>
                        <button onClick={() => deleteHandler(data.id, originalData)} title="Delete" style={{ backgroundColor: "green", border: "none", cursor: "pointer", fontSize: "18px", color: "red" }}>🗑️</button>
                    </div>
                }
            </div>
            <div>
                {
                    isOpen && (
                        data.items.map((item, idx) => {
                            return (<RenderData key={idx} data={item} setData={setData} originalData={originalData} />)
                        })
                    )
                }
            </div>
        </div>

    )
}

export default RenderData;