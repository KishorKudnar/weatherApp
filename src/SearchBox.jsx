import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
export default function SearchBox({ changeIfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "62cc3f49ac35a5f1953055493c6d2fd3";

    let getWhtherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                temp_max: jsonResponse.main.temp_max,
                temp_min: jsonResponse.main.temp_min,
                pressure: jsonResponse.main.pressure,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
                wind: jsonResponse.wind.deg,
                speed: jsonResponse.wind.speed,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleApi = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            setError(false);
            let newInfo = await getWhtherInfo();
            changeIfo(newInfo);
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleApi}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange} /><br /><br />
                <Button variant="contained" size="medium" type='submit' oncl>Search</Button>
                {error && <p style={{ color: "red", fontWeight: 500 }}>This place is not in API.</p>}
            </form>

        </div>
    );
}