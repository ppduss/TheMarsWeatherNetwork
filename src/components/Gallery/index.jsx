import React from 'react';
import '../TopStories/TopStories.scss';
// CAROUSEL
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
// IMAGES
// import manfell from '../../assets/images43/manfell.jpeg';
// import manfell2 from '../assets/images43/manfell2.jpeg';
import atmosphere from '../../assets/images43/atmosphere.jpeg';
import korolevcrater from '../../assets/images43/korolevcrater.jpeg';
// import aliens from '../../assets/images43/aliens.jpeg';
import impact from '../../assets/images43/impactcrater.jpeg';
import marstrue from '../../assets/images43/marstrue.jpeg';


const Gallery = () => (
  <div>
    <div className="top-stories_header">Gallery</div>
    <div>
      <Carousel
        // centered
        autoPlay={5500}
        animationSpeed={1500}
        // arrows
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
        <img src={marstrue} alt="true" width={300} />
        <img src={impact} alt="impact" width={300} />
        <img src={atmosphere} alt="atmosphere" width={300} />
        <img src={korolevcrater} alt="crater" width={300} />
        <img src={marstrue} alt="true" width={300} />
        <img src={impact} alt="impact" width={300} />
        <img src={atmosphere} alt="atmosphere" width={300} />
      </Carousel>
    </div>
  </div>
);
export default Gallery;
