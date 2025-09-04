import { useState } from 'react'
import PollProgressBar from './PollProgressBar';


function PollWidget() {
    const initialData = [8, 2, 5];
    const [data, setData] = useState(["Aam Aadmi Party", "Bahujan Samaj Party", "Bhartiya Janta Party"]);
    const [checked, setChecked] = useState([false, false, false]);
    const [clicked, setClicked] = useState(false);
    const [pollsData, setPollsData] = useState(initialData);
    const handleChange = (e, idx) => {
        if (!clicked) {
            setClicked(true);
            const updated = [...checked];
            const tempPollsData = [...pollsData];
            tempPollsData[idx] += 1;
            setPollsData(tempPollsData);
            sessionStorage.setItem("pollsData", [...pollsData]);
            document.cookie = "username=kaushal; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/cart; SameSite=Lax; secure";
            console.log(document.cookie)
            updated[idx] = true;
            setChecked(updated);
        }
    }


    const removeVote = () => {
        setChecked([false, false, false]);
        setClicked(false);
        setPollsData(initialData);
    }
    return (
        <>
            <div style={{ width: "95vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "600px", height: "400px", backgroundColor: "green", display: "flex", flexDirection: "column", gap: "20px", justifyContent: "flex-start", padding: "20px", borderRadius: "30px" }}>
                    <div style={{ color: "black", fontSize: "30px", color: "white" }}>Who is going to win this election?</div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "20px" }}>
                        {
                            data.map((party, idx) => {
                                return (<div key={idx} onClick={(e) => handleChange(e, idx)} style={{ display: "flex", gap: "50px", justifyContent: "flex-start", alignItems: "center", backgroundColor: "orange", height: "45px", borderRadius: "10px", cursor: "pointer" }}>
                                    <input type="radio" checked={checked[idx]} style={{ width: "20px", height: "20px", backgroundColor: "white" }}></input>
                                    <div>{party}</div>
                                    {
                                        clicked && (
                                            <PollProgressBar width={((pollsData[idx]) / (pollsData[0] + pollsData[1] + pollsData[2])) * 200} />
                                        )
                                    }
                                </div>)
                            })
                        }
                    </div>
                    {
                        clicked && (
                            <button onClick={removeVote} style={{ color: "red", width: "130px", height: "45px", marginTop: "90px", fontSize: "15px" }}>Remove Vote</button>
                        )
                    }
                </div>

            </div>
        </>
    )
}

export default PollWidget
