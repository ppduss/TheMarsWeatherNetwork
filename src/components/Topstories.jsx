import React, { useState, useEffect } from 'react';
import './topstories.scss';
// CAROUSEL
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
// IMAGES
import manfell from '../assets/images43/manfell.jpeg';
import atmosphere from '../assets/images43/atmosphere.jpeg';
import korolevcrater from '../assets/images43/korolevcrater.jpeg';
import aliens from '../assets/images43/aliens.jpeg';
import impact from '../assets/images43/impactcrater.jpeg';
import marstrue from '../assets/images43/marstrue.jpeg';


const slidesPerPage = () => {
  if (window.innerWidth < 1000) {
    return (3);
  } return (4);
};
// useEffect(() => console.log('this runs every render'));
console.log(window.innerWidth, slidesPerPage());

const topstories = () => (
  <div>
    <div className="top-stories_header">Top Stories</div>
    <div className="carousel-container">
      <Carousel
        centered
        dots
        infinite
        slidesPerPage={slidesPerPage()}
        offset={0}
      >
        <div className="story">
          <a href="https://en.uncyclopedia.co/wiki/Ancient_Aliens">
            <img src={aliens} alt="Is there life on Mars ?" className="story" />
          </a>
          <span className="story_txt_title">Life on Mars ?</span>
          <p className="story_txt">You’ll never guess what Giorgio Tsoukalos has to say about it !</p>
        </div>
        <div className="story">
          <a href="https://www.youtube.com/watch?v=YF_ESqYuhSQ">
            <img src={manfell} alt="Is there life on Mars ?" className="story" />
          </a>
          <span className="story_txt_title">David Bowie dead ?</span>
          <p className="story_txt">Or did the “man who fell on earth” return home ?</p>
        </div>

        <img src={korolevcrater} width={300} />
        <img src={marstrue} width={300} />
        <img src={impact} width={300} />
        <img src={atmosphere} width={300} />
      </Carousel>
    </div>
    <div className="top-stories_content" />

  </div>
);
export default topstories;
