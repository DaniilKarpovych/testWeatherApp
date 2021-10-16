import { useContext, useEffect } from 'react'
import './actualWeather.css'
import { Context } from '../lib/settingContext'
import { useWeather } from '../hook/useWeather'

export const ActualWeather = () => {
    const { coordinate, setTemperature } = useContext(Context)

    const { data, isSuccess } = useWeather(coordinate);
    const actualWeather = Array.isArray(data?.data?.consolidated_weather) && data?.data
    const { consolidated_weather, title, location_type, latt_long } = actualWeather
    const { the_temp, weather_state_name, humidity, max_temp, min_temp, air_pressure, wind_speed } = Array.isArray(consolidated_weather) && consolidated_weather[0]

    useEffect(() => {
        setTemperature(the_temp)
    }, [setTemperature, the_temp])

    if (isSuccess) {
        return (
            <div className="container">
                <p>{location_type} <span className='redspan'>{title}</span> {weather_state_name}</p>
                <p>{Math.round(the_temp)}°С temperature from {Math.round(max_temp)} to {Math.round(min_temp)} humidity {humidity}% wind {Math.round(wind_speed)} m/s. {air_pressure} hpa</p>
                <p>Geo coords <span className='redspan'>[{latt_long}]</span></p>
            </div>
        )
    }

    return (
        <div className="container">
            <h3>...LOADING</h3>
        </div>
    )
}


// air_pressure: 1021,
// applicable_date: "2021-10-15",
// created: "2021-10-15T08:45:28.968925Z",
// humidity: 81,
// id: 5820303306391552,
// max_temp: 15.995,
// min_temp: 12.845,
// predictability: 71,
// the_temp: 15.58,
// visibility: 9.999726596675416,
// weather_state_abbr: "hc",
// weather_state_name: "Heavy Cloud",
// wind_direction: 266,
// wind_direction_compass: "W",
// wind_speed: 4.196673824862801,