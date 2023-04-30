import '../styles/App.css';
import Header from './Header';
import Weather from './Weather';
import { useState, useEffect } from 'react';

function App() {

  const [city, setCity] = useState('Lyon');
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchWeatherData = () => {
      fetch(`${process.env.REACT_APP_WEATHER_API_URL}/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&days=5&aqi=no&alerts=no`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setData(data);
          setCity(data.location.name);
        })
    };
    fetchWeatherData()
  }, [city])


  return (
    <div className="App">
      <Header />

      <div className="row">
        <div className="col s12 m6 push-m3">

        {(typeof data.location != 'undefined') ? (
          <Weather city={city} weatherData={data}/>
        ): (
          <div></div>
        )}

          
              
        </div>
      </div>

    </div>
  );
}

export default App;
