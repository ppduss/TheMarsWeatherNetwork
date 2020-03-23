import React, { useState, useEffect } from 'react';
import './Forecast.scss';
import axios from 'axios';
// COMPONENTS
import UVindex from './UVindex';


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


  const displayDay = () => {
    if (weatherData) {
      // console.log({ newDate });
      const solKeysArray = weatherData.sol_keys;
      const output = solKeysArray.map((sol) => {
        const day = weatherData[sol];

        const generateDate = () => {
          if (day.First_UTC.slice(5, 7) === '01') {
            return ('Jan');
          } if (day.First_UTC.slice(5, 7) === '02') {
            return ('Feb');
          } if (day.First_UTC.slice(5, 7) === '03') {
            return ('Mar');
          } if (day.First_UTC.slice(5, 7) === '04') {
            return ('Apr');
          } if (day.First_UTC.slice(5, 7) === '05') {
            return ('May');
          } if (day.First_UTC.slice(5, 7) === '06') {
            return ('June');
          } if (day.First_UTC.slice(5, 7) === '07') {
            return ('July');
          } if (day.First_UTC.slice(5, 7) === '08') {
            return ('Aug');
          } if (day.First_UTC.slice(5, 7) === '09') {
            return ('Sep');
          } if (day.First_UTC.slice(5, 7) === '10') {
            return ('Oct');
          } if (day.First_UTC.slice(5, 7) === '11') {
            return ('Nov');
          } if (day.First_UTC.slice(5, 7) === '12') {
            return ('Dec');
          }
        };
        return (
          <>
            <div className="sol">
              <div className="day">
                <div>
                  {`${generateDate()} ${day.First_UTC.slice(8, 10)}`}
                </div>
                <div>Sol {sol}</div>
              </div>
              <div className="temperature">
                <div className="block">{Math.round(day.AT.av)}°C</div>
                <div className="block">{Math.round(day.AT.mx)}°C</div>
                <div className="block">{Math.round(day.AT.mn)}°C</div>
              </div>
              <div className="wind">.
                <div className="block">{Math.round(day.HWS.av)} m/s</div>
                <div className="block">{Math.round(day.HWS.mn)} m/s</div>
                <div className="block">{Math.round(day.HWS.mx)} m/s</div>
                <div className="block">{day.WD.most_common.compass_point}</div>
              </div>
              <div className="pressure">
                <div className="block">{Math.round(day.PRE.av)} Pa</div>
              </div>
            </div>
            {/* // </div> */}
          </>
        );
      });
      console.log(weatherData);
      // console.log(solKeysArray);
      return output;
    }
  };

  //  go through .sol_keys array
  // select the weatherData key that matches each .sol_key
  //

  const ForecastContent = () => (

    <div className="forecast_container">
      <div className="spacer" />
      <div className="forcast_main-component">
        <div className="sol_container">
          <div>
            <div className="sol">
              <div className="day">
                <div>Earth date</div>
                <div>Martian date</div>
              </div>
              <div className="temperature">
                <div className="block">Avg. Temp</div>
                <div className="block">High </div>
                <div className="block">Low</div>
              </div>
              <div className="wind">
                <div className="block">Wind Speed</div>
                <div className="block">Avg.</div>
                <div className="block">Low</div>
                <div className="block">High</div>
                <div className="block">Avg. Direction</div>
              </div>
              <div className="pressure">
                <div className="block">Avg. Pressure </div>
              </div>
            </div>
          </div>
          {displayDay()}
        </div>
        <div className="spacer_small" />
        <div className="UVindex_container">
          <UVindex />
        </div>

      </div>
    </div>
  );

  return (
    <ForecastContent />
  );
};

export default Forecast;
