import React from 'react';
import '../styles/Weather.css';
import Days from './Days';
import { useState } from 'react';


function Weather({ city, weatherData }) {

    const [img, setImg] = useState(weatherData.current.condition.icon);
    const [temperature, setTemperature] = useState(weatherData.current.temp_c);
    const [wind, setWind] = useState(weatherData.current.wind_kph);
    const [windDegree, setWindDegree] = useState(weatherData.current.wind_degree);

    let path;

    
    function getDataOfClickedDay(clickedDay, isCurrentDay){
        document.querySelector('.actual-day').classList.remove('actual-day');
        if (isCurrentDay){
            setImg(weatherData.current.condition.icon);
            setTemperature(weatherData.current.temp_c);
            setWind(weatherData.current.wind_kph);
            setWindDegree(weatherData.current.wind_degree);
        } else {
            path = weatherData.forecast.forecastday[clickedDay];
            setImg(path.day.condition.icon);
            setTemperature(path.day.avgtemp_c);
            setWind(path.hour[0].wind_kph);
            setWindDegree(path.hour[0].wind_degree);           
        } 
        document.querySelector(`#day-${clickedDay}`).classList.add('actual-day');
    }

    return (
        <div className="weather card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{city}</span>
                <p><img src={img} alt="sun"/></p>
                <span className="temperature">{temperature}°</span>
                <div className="wind">Vent {wind}km/h ({windDegree}°)</div>
            </div>
            <Days getDataOfClickedDay={getDataOfClickedDay}/>
                        
        </div>
    )
}

export default Weather