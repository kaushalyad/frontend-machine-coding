import { useEffect, useState } from "react";

const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const [totalSum, setTotalSum] = useState(0);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("items"));
        console.log("cartData", data)
        setCartData(data);
        let sum = 0;
        data.map((item, idx) => {
            sum += Math.ceil(item.price);
        })
        setTotalSum(sum);
    }, [])
    console.log(cartData)
    return (
        <div style={{ width: "100%", backgroundColor: "white", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
            <div style={{ fontSize: "40px", width: "100%", height: "100px", backgroundColor: "blue", color: "white", textAlign: "center", alignItems: "center", display: "flex", justifyContent: "center" }}>Cart</div>
            <div style={{ display: "flex" }}>
                <div style={{ dispaly: "flex", flexDirection: "column", gap: "65px", justifyContent: "space-evenly", width: "60%" }}>
                    {
                        cartData.map((item, idx) => {
                            return (<div style={{ width: "100%", height: "120px", display: "flex", gap: "100px", padding: "20px", color: "gray", fontSize: "30px" }}>
                                <img src={item.image} style={{ height: "60px" }}></img>
                                <div>{item.title}</div>
                                <div>{Math.ceil(item.price)}</div>
                            </div>)
                        })
                    }
                </div>
                <div>
                    <div style={{ fontSize: "70px", width: "100%", justifyContent: "center", marginTop: "50px", marginLeft: "100px" }}>
                        Total : {totalSum}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;