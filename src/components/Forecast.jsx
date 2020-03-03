import React, {useState, useEffect} from 'react';
import './forecast.scss';
import axios from 'axios'; 

const Forecast = () => {
  const [weatherData, setWeatherData] = useState(undefined)

  const fetchWeather = () => {
    axios.get('https://api.nasa.gov/insight_weather/?api_key=Bh0T6mIkmv2KnW5FW28FYSR16frmXn4sy4Upy4ji&feedtype=json&ver=1.0')
      .then(function (response) {
        setWeatherData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  useEffect(() => {
    fetchWeather()
  }, [])


  const displayDay = () => {
    if (weatherData) {

  };
  //  go through .sol_keys array
  // select the weatherData key that matches each .sol_key
  // 

  const ForecastContent = () => (
    
    <div className="container_forecast">
      <div className="main-component_forecast">
        <div>Hello</div>
        {displayDay()}
      <div>{}</div>
    
      </div>
      </div>
  );
  
    return (
    <ForecastContent />
    )
    
}

export default Forecast