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
        setDescription(response.data.explanation.slice(0, 160));
        setMediaType(response.data.media_type);
        
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  useEffect(() => {
    fetchApod();
  }, []);

  const mediaSelector = () => {
    if (mediaType === 'image') {
      return (
        <img title="APOD" className="photograph" src={pictureOfTheDay} alt="NASA APOD" />
      )
    }
    else if (mediaType === undefined) {
      return (
        <img title="APOD" className="photograph" src="https://apod.nasa.gov/apod/image/1401/mooneyecon_melies_960.jpg" alt="NASA APOD" />
      );
    }
    else {
      return (
        <iframe title="APOD" className="photograph" src={pictureOfTheDay} alt="APOD video" />);
    }
  };

  return (
    <a target="_blank" rel="noopener noreferrer" href="https://apod.nasa.gov/apod/astropix.html">
      <div className="APOD_main">
        <div className="APOD_title">Astronomy Picture of the Day</div>
        { mediaSelector() }
        <div className="text_container">
          <div className="bottom_text">{pictureTitle? pictureTitle : ''}</div>
          <div className="description">{description? (description + " ...(more)") : "The API did not supply information about today's picture. Please click here for the official APOD post or check again tomorrow."}</div>
        </div>
      </div>
    </a> 
  );
};

export default APOD;
