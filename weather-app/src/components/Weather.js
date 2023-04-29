import React from 'react';
import '../styles/Weather.css';
import Days from './Days';
import { useState } from 'react';
import sun from '../assets/icons/sun.svg';
import cloudySun from '../assets/icons/cloudy-sun.svg';
import cloudy from '../assets/icons/cloudy.svg';
import rainy from '../assets/icons/rainy.svg';
import snowy from '../assets/icons/snowy.svg';
import storm from '../assets/icons/storm.svg';
import thunder from '../assets/icons/thunder.svg';
import windy from '../assets/icons/windy.svg';

function Weather({ weatherData }) {

    // const [temperature, setTemperature] = useState();
    // setTemperature(data.current.temp_c);

    return (
        <div className="weather card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{weatherData.location.name}</span>
                <p><img src={weatherData.current.condition.icon} alt="sun"/></p>
                <span className="temperature">{weatherData.current.temp_c}°</span>
                <div className="wind">Vent {weatherData.current.wind_kph}km/h ({weatherData.current.wind_degree}°)</div>
            </div>
            <Days />
                        
        </div>
    )
}

export default Weather