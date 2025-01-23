import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
export default function WeatherApp() {
let[weather,setWeather]=useState(null)

let changeIfo = (newInfo)=>{
    setWeather(newInfo);
}

    return (
        <div>
            <h1>Weather App</h1>
            <SearchBox changeIfo ={changeIfo} />
            {weather && <InfoBox info={weather} />}
            
        </div>
    );
}