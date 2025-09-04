
const PollProgressBar = ({ width }) => {

    return (
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "200px", backgroundColor: "gray", height: "10px", borderRadius: "20px", display: "flex" }}>
                <div style={{ width: `${width}px`, backgroundColor: "red", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", height: "100%", borderTopRightRadius: width === 200 ? "20px" : "0px", borderBottomRightRadius: width === 200 ? "20px" : "0px" }}></div>
            </div>
            <div>Vote{`(${width / 2}%)`}</div>
        </div>)
}

export default PollProgressBar;