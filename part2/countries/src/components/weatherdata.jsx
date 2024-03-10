import axios from "axios";
import { useEffect, useState } from "react";

const WeatherData = ({city}) => {
    const OPENWEATHER_API_KEY ="d99a4fb8826a15b48b32dee474d9679e";
    const [weather , setWeather] = useState([]);

    useEffect(() => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`
          )
          .then((response) => {
            setWeather(response.data);
          })
      }, [])


    return (
        <div>
          {weather.main ? (
            <div>
              <h2>Weather in {city}</h2>
              <div>Temperature {weather.main.temp}°C</div>
              <img
                alt="weather icon"
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              />
              <div>Wind {weather.wind.speed} m/s</div>
            </div>
          ) : null}
        </div>
      )
    }
    
    export default WeatherData;