import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APOD = () => {
  const [pictureOfTheDay, setPictureOfTheDay] = useState(undefined);

  const fetchPicture = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=Bh0T6mIkmv2KnW5FW28FYSR16frmXn4sy4Upy4ji')
      .then((response) => {
        setPictureOfTheDay(response.data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchPicture();
  }, []);

  return (
    <div>
      <div />
      <img src={pictureOfTheDay} alt="broken" />
    </div>
  );
};

export default APOD;
