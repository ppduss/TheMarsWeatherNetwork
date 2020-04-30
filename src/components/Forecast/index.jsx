import React, { useState, useEffect } from 'react';
import './Forecast.scss';
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


  const displayDays = () => {
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
        const safety = (stuff) => {
          if (stuff == null) {
            return ('N/A');
          } return (Math.round(stuff));
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
                <div>{safety(day.AT.av)}°C</div>
                <div>{safety(day.AT.mx)}°C</div>
                <div>{safety(day.AT.mn)}°C</div>
              </div>
              <div className="wind">
                <div className="empty-space" />
                <div>{safety(day.HWS.av)} m/s</div>
                <div>{safety(day.HWS.mn)} m/s</div>
                <div>{safety(day.HWS.mx)} m/s</div>
                <div>{day.WD.most_common.compass_point}</div>
              </div>
              <div className="pressure">
                <div>{safety(day.PRE.av)}</div>
              </div>
            </div>
          </>
        );
      });

      return output;
    }
  };

  const ForecastContent = () => (
    <div className="sol_container descriptors">
      <div className="sol main">
        <div className="day title">
          <div>Earth date</div>
          <div>Martian date</div>
        </div>
        <div className="temperature title">
          <div>Avg. Temp</div>
          <div>High </div>
          <div>Low</div>
        </div>
        <div className="wind title">
          <div>Wind Speed</div>
          <div>Avg.</div>
          <div>Low</div>
          <div>High</div>
          <div>Avg. Direction</div>
        </div>
        <div className="pressure title">
          <div>Avg. Pressure </div>
        </div>
      </div>
      {displayDays()}
    </div>

  );

  return (
    <ForecastContent />
  );
};

export default Forecast;
