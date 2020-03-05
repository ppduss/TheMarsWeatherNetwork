import React, { useState, useEffect } from 'react';
import './forecast.scss';
import axios from 'axios';

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
      const solKeysArray = weatherData.sol_keys;
      const output = solKeysArray.map((sol) => {
        const day = weatherData[sol];
        return (
          <>

            {/* // <div className="sol_container"> */}
            <div className="sol">Sol: {sol}
              {/* <div className="temperature"> */}
              <div>{Math.round(day.AT.av)}</div>
              <div>{Math.round(day.AT.mn)}</div>
              <div>{Math.round(day.AT.mx)}</div>
              {/* </div> */}
              {/* <div className="wind-speed">Wind Speed */}
              <div>{Math.round(day.HWS.av)}</div>
              <div>{Math.round(day.HWS.mn)}</div>
              <div>{Math.round(day.HWS.mx)}</div>
              <div>{day.WD.most_common.compass_point}</div>
              {/* </div> */}
              {/* <div className="atmospheric-pressure">Atmospheric Pressure */}
              <div>{Math.round(day.PRE.av)}</div>
              {/* </div>          */}
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

    <div className="container_forecast">
      <div className="spacer" />
      <div className="main-component_forecast">
        <div>The latest weather updates from Elysium Planitia, Mars. </div>
        <div className="sol_container">
          <div>
            <div className="sol">Sol:
              <div className="temperature">
                <div>Average:</div>
                <div>Low:</div>
                <div>High: </div>
              </div>
              <div>
                <div>Av. Wind Speed:</div>
                <div>Low: </div>
                <div>High:</div>
                <div>Av. Direction:</div>
              </div>
              <div>
                <div>Av. Pressure: </div>
              </div>
            </div>
          </div>
          {displayDay()}
        </div>
        <div>{}</div>

      </div>
    </div>
  );

  return (
    <ForecastContent />
  );
};

export default Forecast;
