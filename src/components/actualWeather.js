import { useContext, useEffect } from 'react'
import './actualWeather.css'
import { Context } from '../lib/settingContext'
import { useWeather } from '../hook/useWeather'
import { CircularProgress } from '@mui/material'

export const ActualWeather = () => {
    const { coordinate, setTemperature } = useContext(Context)

    const { data, isSuccess, isError } = useWeather(coordinate);
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
    if (isError) {
        return (
            <div className="container">
                <h3>ERROR, check the location</h3>
            </div>
        )
    }

    return (
        <div className="container">
            <p>...LOADING</p>
            <div ><CircularProgress /></div>
        </div>
    )
}


