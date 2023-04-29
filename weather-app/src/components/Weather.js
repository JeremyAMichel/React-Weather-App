import React from 'react';
import '../styles/Weather.css';
import Days from './Days';
import sun from '../assets/icons/sun.svg';

function Weather() {
  return (
    <div class="weather card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">Lyon</span>
            <p><img src={sun} alt="sun"/></p>
            <span class="temperature">15°</span>
            <div class="wind">Vent 1km/h (360°)</div>
        </div>
        <Days />
                    
    </div>
  )
}

export default Weather