import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './apod.scss';

const APOD = () => {
  const [pictureOfTheDay, setPictureOfTheDay] = useState(undefined);
  const [pictureTitle, setPictureTitle] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [mediaType, setMediaType] = useState(undefined);

  const fetchApod = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=Bh0T6mIkmv2KnW5FW28FYSR16frmXn4sy4Upy4ji')
      .then((response) => {
        setPictureOfTheDay(response.data.url);
        setPictureTitle(response.data.title);
        setDescription(response.data.explanation.slice(0, 180));
        setMediaType(response.data.media_type);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchApod();
  }, []);

  const mediaSelector = () => {
    if (mediaType === 'image') {
      return (
        <img title="APOD" className="photograph" src={pictureOfTheDay} alt="NASA APOD" />
      );
    } return (
      <iframe title="APOD" className="photograph" src={pictureOfTheDay} alt="APOD video" />);
  };

  return (
    <div className="APOD_main">
      <div className="APOD_title">Astronomy Picture of the Day</div>
      <a href="https://apod.nasa.gov/apod/astropix.html">
        {mediaSelector()}
        <div className="text_container">
          <div className="bottom_text">{pictureTitle}</div>
          <div className="description">{description}...(continued)</div>
        </div>
      </a>
    </div>
  );
};

export default APOD;
