import React from 'react';
// import './topstories.scss';
// CAROUSEL
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
// IMAGES
import manfell from '../../assets/images43/manfell.jpeg';
// import manfell2 from '../assets/images43/manfell2.jpeg';
import atmosphere from '../../assets/images43/atmosphere.jpeg';
import korolevcrater from '../../assets/images43/korolevcrater.jpeg';
import aliens from '../../assets/images43/aliens.jpeg';
import impact from '../../assets/images43/impactcrater.jpeg';
import marstrue from '../../assets/images43/marstrue.jpeg';

const Gallery = () => (
  <div>
    <div className="top-stories_header">Gallery</div>
    <div>  <Carousel
      centered
      dots
      infinite
      slidesPerPage={4}
      offset={0}
>


      <img src={korolevcrater} width={300} />
      <img src={marstrue} width={300} />
      <img src={impact} width={300} />
      <img src={atmosphere} width={300} />

           </Carousel>
    </div>
    <div className="top-stories_content" />

  </div>
);
export default Gallery;
