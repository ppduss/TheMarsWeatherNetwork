import React from 'react';
import './TopStories.scss';
//  CAROUSEL  //
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
//  IMAGES  //
import manfell from '../../assets/images43/manfell.jpeg';
import atmosphere from '../../assets/images43/atmosphere.jpeg';
import korolevcrater from '../../assets/images43/korolevcrater.jpeg';
import aliens from '../../assets/images43/aliens.jpeg';


const [dimensions, setDimensions] = useState(window.innerWidth);

useEffect(() => {
  articleHandler = () => {
    setDimensions(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return (
    console.log(dimensions)
  );
});


// const slidesPerPage = () => {
//   if (window.innerWidth < 500) {
//     return (1);
//   } if ((window.innerWidth >= 500) && (window.innerWidth <= 830)) {
//     return (2);
//   } if ((window.innerWidth > 830) && (window.innerWidth <= 1150)) {
//     return (3);
//   } return (4);
// };

const topstories = (dimensions) => (
  <div>
    <div className="top-stories_header">Top Stories</div>
    <div className="carousel-container">
      <Carousel
        // centered
        dots
        infinite
        slidesPerPage={dimensions}
        offset={0}
      >

        <div className="story">
          <a href="https://en.uncyclopedia.co/wiki/Ancient_Aliens">
            <img src={aliens} alt="Is there life on Mars ?" className="story" />
          </a>
          <span className="story_txt_title">What's on Mars ?</span>
          <p className="story_txt">You’ll never guess Tsoukalos' one-word answer !</p>
        </div>
        <div className="story">
          <a href="https://www.youtube.com/watch?v=YF_ESqYuhSQ">
            <img src={manfell} alt="Is the Starman in space ?" className="story" />
          </a>
          <span className="story_txt_title">David Bowie dead ?</span>
          <p className="story_txt">Or did the “man who fell to earth” return home ?</p>
        </div>
        <div className="story">
          <a href="https://www.youtube.com/watch?v=YF_ESqYuhSQ">
            <img src={korolevcrater} alt="Korolev" className="story" />
          </a>
          <span className="story_txt_title">The Korolev Crater</span>
          <p className="story_txt">2020's hottest destination !</p>
        </div>
        <div className="story">
          <a href="https://www.youtube.com/watch?v=YF_ESqYuhSQ">
            <img src={atmosphere} alt="Korolev" className="story" />
          </a>
          <span className="story_txt_title">The Korolev Crater</span>
          <p className="story_txt">2020's hottest destination !</p>
        </div>


      </Carousel>
    </div>
    <div className="top-stories_content" />

  </div>
);
export default topstories;
