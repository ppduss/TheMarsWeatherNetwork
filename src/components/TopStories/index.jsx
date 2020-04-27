import React, { useEffect, useState } from 'react';
import './TopStories.scss';
//  CAROUSEL  //
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
//  IMAGES  //
import manfell from '../../assets/images43/manfell.jpeg';
import atmosphere from '../../assets/images43/atmosphere.jpeg';
import korolevcrater from '../../assets/images43/korolevcrater.jpeg';
import aliens from '../../assets/images43/aliens.jpeg';

// const [dimensions, setDimensions] = useState(window.innerWidth);
// useEffect(() => {
//   // articleHandler = () => {
//   //   setDimensions(window.innerWidth)};
//   window.addEventListener('resize', handleResize())
//   });
//   handleResize = () => {
//   }
//   return (
//     console.log(dimensions)
//   );
// };
//

const Topstories = () => (
  <div>
    <div className="top-stories_header">Top Stories</div>
    <div className="carousel-container">
      <Carousel
          // centered
        dots
        infinite
        slidesPerPage={1}
        breakpoints={{
          400: {
            slidesPerPage: 1,
          },
          600: {
            slidesPerPage: 1.5,
          },
          800: {
            slidesPerPage: 2,
          },
          1000: {
            slidesPerPage: 2.5,
          },
          1200: {
            slidesPerPage: 3,
          },
          1600: {
            slidesPerPage: 3,
          },
          2000: {
            slidesPerPage: 3.5,
          },
        }}
        offset={0}
        >
        <div className="story">
          <a href="https://en.uncyclopedia.co/wiki/Ancient_Aliens">
            <img src={aliens} alt="Is there life on Mars ?" />
          </a>
          <span className="story_txt_title">What&apos;s on Mars ?</span>
          <p className="story_txt">You’ll never guess his shocking answer !</p>
        </div>
        <div className="story">
          <a href="https://www.youtube.com/watch?v=YF_ESqYuhSQ">
            <img src={manfell} alt="Is the Starman in space ?" />
          </a>
          <span className="story_txt_title">David Bowie dead ?</span>
          <p className="story_txt">Or did the “man who fell to earth” return home ?</p>
        </div>
        <div className="story">
          <a href="https://www.youtube.com/watch?v=YF_ESqYuhSQ">
            <img src={korolevcrater} alt="Korolev" />
          </a>
          <span className="story_txt_title">The Korolev Crater</span>
          <p className="story_txt">2020&apos;s hottest destination !</p>
        </div>
        <div className="story">
          <a href="https://www.youtube.com/watch?v=YF_ESqYuhSQ">
            <img src={atmosphere} alt="Korolev" />
          </a>
          <span className="story_txt_title">The Korolev Crater</span>
          <p className="story_txt">2020&apos;s hottest destination !</p>
        </div>
      </Carousel>
    </div>
  </div>
);
export default Topstories;
