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
        console.log(error);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const displaySelector = () => {
    const sevenEmptySolKeys = Array(7).fill(0);
    console.log(weatherData);
    const solKeysArray = (weatherData && weatherData.sol_keys) || sevenEmptySolKeys;
    const output = solKeysArray.map((sol) => {
      const day = ((weatherData && weatherData[sol]) || sol);
      

      // const generateDate = () => {
      //   if (day.First_UTC.slice(5, 7) === '01') {
      //     return ('Jan');
      //   } if (day.First_UTC.slice(5, 7) === '02') {
      //     return ('Feb');
      //   } if (day.First_UTC.slice(5, 7) === '03') {
      //     return ('Mar');
      //   } if (day.First_UTC.slice(5, 7) === '04') {
      //     return ('Apr');
      //   } if (day.First_UTC.slice(5, 7) === '05') {
      //     return ('May');
      //   } if (day.First_UTC.slice(5, 7) === '06') {
      //     return ('June');
      //   } if (day.First_UTC.slice(5, 7) === '07') {
      //     return ('July');
      //   } if (day.First_UTC.slice(5, 7) === '08') {
      //     return ('Aug');
      //   } if (day.First_UTC.slice(5, 7) === '09') {
      //     return ('Sep');
      //   } if (day.First_UTC.slice(5, 7) === '10') {
      //     return ('Oct');
      //   } if (day.First_UTC.slice(5, 7) === '11') {
      //     return ('Nov');
      //   } if (day.First_UTC.slice(5, 7) === '12') {
      //     return ('Dec');
      //   }
      // };
      // const safety = (main, element, specifics, unit) => {
      //   if (main && element && specifics) {
      //     return (Math.round(specifics) + unit);
      //   } return (false);
      // };

      const displayNumbers = (value, unit) => {
        if (value) {
          return (Math.round(value) + unit);
        } if (value) 
        return 'Loading';
      };
      const displayDays = () => (
        <>
          <div className="sol">
            <div className="day">
              <div>{`${moment(day.First_UTC)} ${moment(day.First_UTC).month()}` || 'Loading'}</div>
              <div>Sol {sol}</div>
            </div>
            <div className="temperature">
              <div className="empty_space" />
              <div>{displayNumbers(day?.AT?.av, ' °C')}</div>
              <div>{displayNumbers(day && day.AT && day.AT.mx, ' °C')}</div>
              <div>{displayNumbers(day && day.AT && day.AT.mn, ' °C')}</div>
            </div>
            <div className="wind">
              <div className="empty_space" />
              <div>{displayNumbers(day && day.HWS && day.HWS.av, ' m/s')}</div>
              <div>{displayNumbers(day && day.HWS.mn, ' m/s')}</div>
              <div>{displayNumbers(day && day.HWS.mx, ' m/s')}</div>
              <div>{day && day.WD && day.WD.most_common && day.WD.most_common.compass_point || 'Loading'}</div>
            </div>
            <div className="pressure">
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
        <div className="day">
          <div>Earthian date</div>
          <div>Martian date</div>
        </div>
        <div className="temperature">
          <div>Temperature</div>
          <div>Average</div>
          <div>High </div>
          <div>Low</div>
        </div>
        <div className="wind">
          <div>Wind Speed</div>
          <div>Avg.</div>
          <div>Low</div>
          <div>High</div>
          <div>Avg. Dir.</div>
        </div>
        <div className="pressure">
          <div>Avg. Press. </div>
        </div>
      </div>
      {displaySelector()}
    </div>
  );


  return (
    <ForecastContent />
  );
};

export default Forecast;
