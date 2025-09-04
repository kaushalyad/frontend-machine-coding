


const InlineBlock = () => {
    return (<div style={{ width: "100vw", height: "100vh", backgroundColor: "red" }}>
        <div style={{ backgroundColor: "green", display: "inline" }}>inline</div>
        <div style={{ backgroundColor: "green", display: "block", width: "200px" }}>Block1</div>
        <div style={{ backgroundColor: "green", display: "inline-block", width: "200px" }}>inline-Block1</div>
        <div style={{ backgroundColor: "green", display: "inline-block", width: "200px" }}>inline-Block2</div>


    </div>)
}

export default InlineBlock;