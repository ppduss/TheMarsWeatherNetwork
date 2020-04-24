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
// const slidesPerPage = () => {
//   // if (window.innerWidth < 480) {
//   //   return (1);
//   // } if ((window.innerWidth >= 768) && (window.innerWidth <= 830)) {
//   //   return (2);
//   // } if ((window.innerWidth > 830) && (window.innerWidth <= 1150)) {
//   //   return (3);
//   // } return (4);
// };

const topstories = () =>
// const [slides, setSlides] = useState(1);

// useEffect(() => {
//   if (window.innerWidth < 480) {
//     setSlides(1);
//   } if ((window.innerWidth >= 768) && (window.innerWidth <= 830)) {
//     setSlides(2);
//   } if ((window.innerWidth > 830) && (window.innerWidth <= 1150)) {
//     setSlides(3);
//   } setSlides(4);
// }, []);

  // console.log(slides);
  (
    <div>
      <div className="top-stories_header">Top Stories</div>
      <div className="carousel-container">
        <Carousel
          // centered
          dots
          infinite
          slidesPerPage={3}
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
export default topstories;
