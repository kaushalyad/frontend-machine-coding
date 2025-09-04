import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function ProductList() {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [inputData, setInputData] = useState("");
    const [suggestedData, setSuggestedData] = useState([]);
    const [cartData, setCartData] = useState([]);

    const navigate = useNavigate();
    const debounce = (fn, delay) => {
        let intervalId;
        return function (...args) {
            clearTimeout(intervalId);
            setTimeout(() => {
                fn(...args);
            }, delay)
        }
    }
    const fetchData = () => {
        setLoading(true);
        fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((productData) => {
            setData(productData);
            setSuggestedData(productData);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setError(err);
            setLoading(false);
        })
    }
    useEffect(() => {
        fetchData();
    }, [])

    const addHandler = (item) => {
        // const alerData = alert(`added ${item.title} to the cart`);
        // const promptData = prompt(`added ${item.title} to the cart`);
        // const confirmData = confirm("are are sure you want to buy the product");
        // console.log("alertdata", alerData);
        // console.log("promptData", promptData);
        // console.log("confirmData", confirmData);
        toast.success(`added ${item.title} to the cart`)
        setCartData((prev) => ([...prev, item]))
        localStorage.clear("items");
        localStorage.setItem("items", JSON.stringify([...cartData, item]));
        // console.log(cartData);
    }
    const search = (e) => {
        const updatedData = [];
        console.log(e.target.value, " ", data)
        data.map((item, index) => {
            if (item.title.toLowerCase().includes(e.target.value.toLowerCase().trim())) {
                updatedData.push(item);
            }
        });
        setSuggestedData(updatedData);
    }

    // console.log(data)

    const butItem = () => {
        navigate("/cart");
    }

    const inputHandler = useCallback(debounce(search, 3000), [data]);

    if (loading) return (<div style={{ paddingTop: "20px", textAlign: "center", fontSize: "30px" }}>Products data is Loading.....</div>)

    if (error.length > 0) return (<div style={{ paddingTop: "20px", textAlign: "center", fontSize: "30px" }}><div>Error Found while fetching data</div>
        <button onClick={() => {
            setLoading(true);
            setError("");
            fetchData();
        }} style={{ border: "none", width: "125px", backgroundColor: "blue", color: "white", borderRadius: "4px", height: "25px", cursor: "pointer", fontSize: "15px" }}>Fetch Data</button></div>)

    return (
        <div style={{ backgroundColor: "gray", minHeight: "100vh", display: "flex", flexDirection: "column", gap: "50px", padding: "30px" }}>

            <div style={{ marginBottom: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <input onChange={inputHandler} style={{ width: "650px", height: "40px", paddingLeft: "20px", fontSize: "20px", border: "none", outline: "none" }} placeholder="search products..."></input>
                <button style={{ height: "40px", paddingLeft: "20px", paddingRight: "20px", cursor: "pointer", border: "none", backgroundColor: "blue", color: "white", fontSize: "20px" }}>Search</button>
            </div>
            <div style={{ fontSize: "45px" }}>Cart:{cartData.length}</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "15px" }}>
                {
                    suggestedData.length === 0 && (<div style={{ width: "95vw", textAlign: "center", fontSize: "40px" }}>No Data Found!</div>)
                }
                {

                    suggestedData.map((item, index) => {
                        return (
                            <div key={item.id} style={{ color: "white", display: "flex", gap: "15px", flexDirection: "column", borderRadius: "50px" }}>

                                <div style={{ width: "250px", height: "350px", backgroundColor: "white", display: "flex", flexDirection: "column", color: "black", justifyContent: "space-between", padding: "20px", alignItems: "center", borderRadius: "10px" }}>
                                    <img src={item.image} style={{ height: "80px" }}></img>
                                    <div style={{ width: "100%" }}>
                                        <div style={{ fontSize: "20px" }}>{item.title}</div>
                                        <div style={{ fontSize: "25px", marginTop: "20px" }}>&#8377;{`${Math.ceil(item.price)}`}</div>
                                    </div>
                                    <div style={{ display: "flex", gap: "20px", height: "30px", width: "100%", justifyContent: "space-between" }}>
                                        <button onClick={() => addHandler(item)} style={{ width: "100px", color: "blue", backgroundColor: "blue", cursor: "pointer", color: "white", border: "none", borderRadius: "5px" }}>Add To Cart</button>
                                        <button onClick={butItem} style={{ width: "100px", color: "blue", backgroundColor: "blue", cursor: "pointer", color: "white", border: "none", borderRadius: "5px" }}>Buy Product</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    );
}

export default ProductList;
