import { useEffect, useState } from "react";
import useFetch from "./useFetch";



const Weather = () => {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const { data, loading } = useFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bf909b4a90c47e810fc156dc73c0ed75`)

    useEffect(() => {
        const currentPosition = navigator.geolocation.getCurrentPosition((e) => {
            setLatitude(e.coords.latitude);
            setLongitude(e.coords.longitude);
        });
    }, [])
    console.log("data", data)
    if (loading) return (<div>Feathing the weather Data....</div>)
    return (<div>
        {
            Object.keys(data).map((key, index) => {
                return <div>{key}</div>
            })
        }
    </div>)
}

export default Weather;