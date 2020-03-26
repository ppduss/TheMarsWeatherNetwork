import React from 'react';
import './TopStories.scss';
// CAROUSEL
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
// IMAGES
import manfell from '../../assets/images43/manfell.jpeg';
import atmosphere from '../../assets/images43/atmosphere.jpeg';
import korolevcrater from '../../assets/images43/korolevcrater.jpeg';
import aliens from '../../assets/images43/aliens.jpeg';
import impact from '../../assets/images43/impactcrater.jpeg';
import marstrue from '../../assets/images43/marstrue.jpeg';


// const [dimensions, setDimensions] = useState(window.innerWidth);

// useEffect(() => {
//   articleHandler = () => {
//     setDimensions(window.innerWidth);
//   };

//   window.addEventListener('resize', handleResize);

//   return (
//     console.log(dimensions)
//   );
// });


const slidesPerPage = () => {
  if (window.innerWidth < 1000) {
    return (3);
  } return (4);
};
// console.log(window.innerWidth, slidesPerPage());

const topstories = () => (
  <div>
    <div className="top-stories_header">Top Stories</div>
    <div className="carousel-container">
      <Carousel
        centered
        dots
        // infinite
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
          <p className="story_txt">2020's hottest destination ?</p>
        </div>

        <img src={marstrue} alt="image" width={300} />
        <img src={impact} alt="image" width={300} />
        <img src={atmosphere} alt="image" width={300} />


      </Carousel>
    </div>
    <div className="top-stories_content" />

  </div>
);
export default topstories;
