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
    const solKeysArray = (weatherData?.sol_keys?.length ? weatherData.sol_keys : sevenEmptySolKeys);
    // const solKeysArray = (weatherData?.sol_keys?.length) || sevenEmptySolKeys;
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
              <div>{displayNumbers(day?.AT?.av, ' °C')|| 'n/a'}</div>
              <div>{displayNumbers(day?.AT?.mx, ' °C')|| 'n/a'}</div>
              <div>{displayNumbers(day?.AT?.mn, ' °C')|| 'n/a'}</div>
            </div>
            <div className="empty_space categories" />
            <div className="details">
              <div>{displayNumbers(day?.HWS?.av, ' m/s')|| 'n/a'}</div>
              <div>{displayNumbers(day?.HWS?.mn, ' m/s')|| 'n/a'}</div>
              <div>{displayNumbers(day?.HWS?.mx, ' m/s') || 'n/a'}</div>
              <div>{day?.WD?.most_common?.compass_point || 'n/a'}</div>
            </div>
            <div className="pressure categories">
              <div>{displayNumbers(day?.PRE?.av, ' pa')|| 'n/a'}</div>
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
