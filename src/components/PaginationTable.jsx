import React, { useCallback, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const initialData = Array.from({ length: 35 }, (_, i) => ({
    name: `User ${i + 1}`,
    email: `user${i + 1}@gmail.com`,
    age: Math.floor(Math.random() * 40) + 18 // random age between 18 and 57
}));


const PaginationTable = ({ rows = 3 }) => {
    const [searchedData, setSearchedData] = useState(initialData);
    const [sliceIndex, setSliceIndex] = useState(0);
    const [sortingMethod, setSortingMethod] = useState([false, false, false]);
    const debounce = (fn, delay) => {
        let intervalId;
        return function (...args) {
            clearInterval(intervalId);
            intervalId = setTimeout(() => {
                fn(...args);
            }, delay);
        }
    }
    const search = (e) => {
        let temp = [];
        temp = initialData.filter((item, idx) => item.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()) || item.email.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
        setSearchedData(temp);
        setSliceIndex(0);
    }
    const searchHandler = useCallback(debounce(search, 3000), [searchedData]);
    const incrementPage = () => {
        setSliceIndex((prev) => prev + rows);
    }
    const decrementPage = () => {
        setSliceIndex((prev) => prev - rows);
    }
    const sorting = (type = "name") => {
        let data = [...searchedData];
        switch (type) {
            case "name":
                if (!sortingMethod[0]) {
                    data = data.sort((a, b) => a.name.localeCompare(b.name));
                    setSortingMethod([true, false, false]);
                }
                else {
                    data.reverse();
                    setSortingMethod([false, false, false]);
                }
                break;
            case "age":
                if (!sortingMethod[2]) {
                    data = data.sort((a, b) => a.age - b.age);
                    setSortingMethod([false, false, true]);
                }
                else {
                    data.reverse();
                    setSortingMethod([false, false, false]);
                }
                break;
            case "email":
                if (!sortingMethod[1]) {
                    data = data.sort((a, b) => a.email.localeCompare(b.email));
                    setSortingMethod([false, true, false]);
                }
                else {
                    data.reverse();
                    setSortingMethod([false, false, false]);
                }
                break;
            default:
                data = searchedData;
        }
        console.log("data", data);
        setSearchedData(data);
    }
    return (
        <div style={{ width: "98vw", height: "95vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "70%", height: "85%", backgroundColor: "#edacac", borderRadius: "15px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", padding: "20px" }}>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <span style={{ fontSize: "40px", fontWeight: "bold" }}>How to Build a Dynamic Table</span>
                    <span style={{ fontSize: "25px", fontWeight: "lighter" }}>A Machine Coding Round Challenge</span>
                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", height: "50px", display: "flex", justifyContent: "center", border: "none", borderRadius: "7px", backgroundColor: "white", alignItems: "center", gap: "5px" }}>

                        <div style={{ fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}> <CiSearch /></div>
                        <input onChange={searchHandler} placeholder="Search by name or email..." style={{ width: "96%", height: "46px", fontSize: "20px", outline: "none", border: "none", borderRadius: "7px" }} >
                        </input>
                    </div>
                </div>
                <div style={{ width: "100%", backgroundColor: "blue", display: "flex", justifyContent: "center", borderRadius: "10px" }}>
                    <div style={{ width: "96%", display: "flex", justifyContent: "space-between", color: "white", fontSize: "24px", paddingTop: "8px", paddingBottom: "8px" }}>
                        <div onClick={() => sorting("name")} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", cursor: "pointer" }}>NAME
                            {
                                !sortingMethod[0] ? <FaChevronUp size={22} /> :
                                    <FaChevronDown size={22} />
                            }
                        </div>
                        <div onClick={() => sorting("email")} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", cursor: "pointer" }}>EMAIL
                            {
                                !sortingMethod[1] ? <FaChevronUp size={22} /> :
                                    <FaChevronDown size={22} />
                            }
                        </div>
                        <div onClick={() => sorting("age")} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", cursor: "pointer" }}>AGE
                            {
                                !sortingMethod[2] ? <FaChevronUp size={22} /> :
                                    <FaChevronDown size={22} />
                            }
                        </div>
                    </div>
                </div>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "5px", width: "100%", justifyContent: "center" }}>
                    {
                        !searchedData.length && (<div style={{ fontSize: "25px", textAlign: "center" }}>No Data Found!</div>)
                    }
                    {
                        searchedData.slice(sliceIndex, sliceIndex + rows).map((item, index) => {
                            return (
                                <div style={{ width: "100%", display: "flex", justifyContent: "center", backgroundColor: "white", borderRadius: "5px" }}>
                                    <div style={{ width: "96%", display: "flex", justifyContent: "space-between", fontSize: "17px", paddingTop: "8px", paddingBottom: "8px", borderRadius: "5px" }}>
                                        <div>{item.name}</div>
                                        <div>{item.email}</div>
                                        <div>{item.age}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{ width: "100%", backgroundColor: "white", display: "flex", justifyContent: "center", borderRadius: "10px", border: "1px solid gray" }}>
                    <div style={{ width: "96%", display: "flex", justifyContent: "space-between", color: "white", fontSize: "27px", paddingTop: "8px", paddingBottom: "8px" }}>
                        <button disabled={sliceIndex < rows} onClick={decrementPage} style={{ cursor: sliceIndex < rows ? "not-allowed" : "pointer", backgroundColor: sliceIndex < rows ? "gray" : "blue", color: "white", paddingLeft: "20px", paddingRight: "20px", border: "none", borderRadius: "5px", fontSize: "20px", textAlign: "center" }}>prev</button>
                        <div style={{ color: "black" }}>{` ${Math.floor((sliceIndex + rows) / rows)} of ${Math.floor((searchedData.length + rows - 1) / rows)}`}</div>
                        <button disabled={sliceIndex >= searchedData.length - rows} onClick={incrementPage} style={{ cursor: sliceIndex >= searchedData.length - rows ? "not-allowed" : "pointer", backgroundColor: sliceIndex >= searchedData.length - rows ? "gray" : "blue", color: "white", paddingLeft: "20px", paddingRight: "20px", border: "none", borderRadius: "5px", fontSize: "20px", textAlign: "center" }}>next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaginationTable;