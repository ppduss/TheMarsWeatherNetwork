import React from 'react';
import '../TopStories/TopStories.scss';
// CAROUSEL
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
// IMAGES
import atmosphere from '../../assets/images43/atmosphere.jpeg';
import marsYellow from '../../assets/images43/marsYellow.jpeg';
import impact from '../../assets/images43/impactcrater.jpeg';
import marstrue from '../../assets/images43/marstrue.jpeg';
import rover from '../../assets/images43/rover.jpeg';
import rover2 from '../../assets/images43/rover2.jpeg';
import near from '../../assets/images43/near.jpeg';

const Gallery = () => (
  <div>
    <div className="top-stories_header">Gallery</div>
    <div>
      <Carousel
        // autoPlay={8000}
        // animationSpeed={1500}
        dots
        infinite
        keepDirectionWhenDragging
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
            slidesPerPage: 3.25,
          },
          2000: {
            slidesPerPage: 4,
          },
          4000: {
            slidesPerPage: 4,
          },
        }}
        offset={0}
      >
        <img src={marstrue} alt="true" width={325} />
        <img src={impact} alt="impact" width={325} />
        <img src={atmosphere} alt="atmosphere" width={325} />
        <img src={marsYellow} alt="marsYellow" width={325} />
        <img src={rover} alt="rover" width={325} />
        <img src={rover2} alt="rover2" width={325} />
        <img src={near} alt="near" width={325} />
      </Carousel>
    </div>
  </div>
);
export default Gallery;
