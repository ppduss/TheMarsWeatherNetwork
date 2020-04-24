import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './apod.scss';

const APOD = () => {
  const [pictureOfTheDay, setPictureOfTheDay] = useState(undefined);
  const [pictureTitle, setPictureTitle] = useState(undefined);
  const [description, setDescription] = useState(undefined);

  const fetchApod = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=Bh0T6mIkmv2KnW5FW28FYSR16frmXn4sy4Upy4ji')
      .then((response) => {
        setPictureOfTheDay(response.data.url);
        setPictureTitle(response.data.title);
        setDescription(response.data.explanation.slice(0, 180));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchApod();
  }, []);

  return (
    <div className="APOD_main">
      <div className="title">Astronomy Picture of the Day</div>
      <a href="https://apod.nasa.gov/apod/astropix.html">
        <iframe title="APOD" className="photograph" src={pictureOfTheDay} alt="NASA APOD" />
        <div className="bottom_text">{pictureTitle}</div>
        <div className="description">{description}...(continued)</div>
      </a>


    </div>
  );
};

export default APOD;
