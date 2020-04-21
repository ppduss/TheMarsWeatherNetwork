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

const slidesPerPage = () => {
  if (window.innerWidth < 480) {
    return (1);
  } if ((window.innerWidth >= 768) && (window.innerWidth <= 830)) {
    return (2);
  } if ((window.innerWidth > 830) && (window.innerWidth <= 1150)) {
    return (3);
  } return (4);
};

const Gallery = () => (
  <div>
    <div className="top-stories_header">Gallery</div>
    <div>
      <Carousel
        // centered
        dots
        infinite
        slidesPerPage={slidesPerPage()}
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
    <div className="top-stories_content" />

  </div>
);
export default Gallery;
