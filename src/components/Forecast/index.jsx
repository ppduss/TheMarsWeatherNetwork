import React, { useState, useEffect } from 'react';
import './Forecast.scss';
import axios from 'axios';
import moment from 'moment';

const Forecast = () => {
  const [weatherData, setWeatherData] = useState(undefined);

  const fetchWeather = () => {
    axios.get('https://api.nasa.gov/insight_weather/?api_key=Bh0T6mIkmv2KnW5FW28FYSR16frmXn4sy4Upy4ji&feedtype=json&ver=1.0')
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const displaySelector = () => {
    const sevenEmptySolKeys = Array(7).fill(0);
    // console.log(weatherData);
    const solKeysArray = (weatherData && weatherData.sol_keys) || sevenEmptySolKeys;
    const output = solKeysArray.map((sol) => {
      const day = ((weatherData && weatherData[sol]) || sol);
      

      const displayNumbers = (value, unit) => {
        if (value) {
          return (Math.round(value) + unit);
        } if (value) 
        return 'Loading';
      };
      const displayDays = () => (
        <>
          <div className="sol">
            <div className="descriptors categories">{`${moment.utc(day.First_UTC).format("MMM")} ${moment(day.First_UTC).format("D")}`}</div>
            <div className="details">Sol {sol}</div>
            <div className="empty_space categories" />
            <div className="details">
              <div>{displayNumbers(day?.AT?.av, ' °C')}</div>
              <div>{displayNumbers(day && day.AT && day.AT.mx, ' °C')}</div>
              <div>{displayNumbers(day && day.AT && day.AT.mn, ' °C')}</div>
            </div>
            <div className="empty_space categories" />
            <div className="details">
              <div>{displayNumbers(day && day.HWS && day.HWS.av, ' m/s')}</div>
              <div>{displayNumbers(day && day.HWS.mn, ' m/s')}</div>
              <div>{displayNumbers(day && day.HWS.mx, ' m/s')}</div>
              <div>{day && day.WD && day.WD.most_common && day.WD.most_common.compass_point || 'Loading'}</div>
            </div>
            <div className="pressure categories">
              <div>{displayNumbers(day && day.PRE && day.PRE.av, ' pa')}</div>
            </div>
          </div>
        </>
      ); return displayDays();
    }); return output;
  };

  const ForecastContent = () => (
    <div className="sol_container">
      <div className="sol descriptors">
        <div className="categories">Earthian date</div>        
        <div className="details">Martian date</div>
        <div className="categories">Temperature</div>
        <div className="details">
          <div>Average</div>
          <div>High </div>
          <div>Low</div>
        </div>
        <div className="categories">Wind Speed</div>
        <div className="details">
          <div>Avg.</div>
          <div>Low</div>
          <div>High</div>
          <div>Avg. Dir.</div>
        </div>
        <div className="categories">
          <div>Pressure </div>
        </div>
      </div>
      {displaySelector()}
    </div>
  );


  return (
    <ForecastContent/>
  );
};

export default Forecast;
