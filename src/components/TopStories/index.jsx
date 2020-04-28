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
import thicc from '../../assets/images43/thicc.jpeg';
import suburb from '../../assets/images43/suburb.jpeg';
import pkdbooks from '../../assets/images43/pkdBook.jpeg';
import flat from '../../assets/images43/flat.jpeg';
import sauvage from '../../assets/images43/sauvage.jpeg';
import orbit from '../../assets/images43/orbit.gif';


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
          <a target="_blank" rel="noopener noreferrer" href="https://en.uncyclopedia.co/wiki/Ancient_Aliens">
            <img src={aliens} alt="life on Mars ?" />
          </a>
          <span className="story_txt_title">What&apos;s beneath Mars&apos; icy surface ?</span>
          <p className="story_txt">You’ll never guess this expert&apos;s shocking answer !</p>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=YF_ESqYuhSQ">
            <img src={manfell} alt="Is the Starman in space ?" />
          </a>
          <span className="story_txt_title">Is David Bowie really dead ?</span>
          <p className="story_txt">Or did the &ldquo;man who fell to earth&ldquo; simply return home ?</p>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://www.npr.org/2018/12/21/679155506/huge-martian-crater-korolev-appears-topped-with-miles-of-pristine-snow">
            <img src={korolevcrater} alt="Korolev" />
          </a>
          <span className="story_txt_title">This year&apos;s hottest ski destination ?</span>
          <p className="story_txt">Why this is the year the Korolev crater is destined to shine.</p>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://www.marscitydesign.com/mojave-desert">
            <img src={suburb} alt="suburb" />
          </a>
          <span className="story_txt_title">Urban Planner can&apos;t wait to turn Mars into suburban sprawl.</span>
          <p className="story_txt">&ldquo;It&apos;s gonna be lit.&ldquo;</p>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Erg_(landform)">
            <img src={atmosphere} alt="Sandy" />
          </a>
          <span className="story_txt_title">How sandy is the Red Planet ?</span>
          <p className="story_txt">NASA experts finally open up about the issue: &ldquo;Erg, it&apos;s pretty sandy&ldquo;.</p>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://www.spacex.com/mars">
            <img src={thicc} alt="thicc" />
          </a>
          <span className="story_txt_title">Space X Mars Mission Update</span>
          <p className="story_txt">Elon announces exciting new Titanium Hull Interplanetary & Cosmic Craft (THICC) rocket.</p>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Philip_K._Dick">
            <img src={pkdbooks} alt="android rights" />
          </a>
          <span className="story_txt_title">Android rights expert: &ldquo;Philip K Dick was robophobic&ldquo;</span>
          <p className="story_txt">&ldquo; And what&apos;s the deal with the whole sheep thing ?&ldquo;</p>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="http://www.the13thfloor.tv/2016/04/12/i-feel-fantastic-the-horrifying-history-of-tara-the-android/">
            <img src={atmosphere} alt="android" />
          </a>
          <span className="story_txt_title">Android Awareness Month</span>
          <p className="story_txt">Debunking the top 10 myths about our mechanical bretheren.</p>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=YF_ESqYuhSQ">
            <img src={atmosphere} alt="Korolev" />
          </a>
          <span className="story_txt_title" />
          <p className="story_txt">2020&apos;s hottest destination !</p>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://www.sciencealert.com/the-flat-earth-society-responded-elon-musk-twitter-beautiful-mars-conspiracy">
            <img src={flat} alt="flat" />
          </a>
          <span className="story_txt_title">Flat Earth Society Twitter statement: Mars is round.</span>
          <p className="story_txt">also Earth is a disk</p>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=YF_ESqYuhSQ">
            <img src={orbit} alt="orbit" />
          </a>
          <span className="story_txt_title">Mars&apos; controversial orbit relative to Earth</span>
          <p className="story_txt">Hasbro lawyers issue copyright infrigement lawsuit over Spirograph-shaped elipse.</p>
        </div>
      </Carousel>
    </div>
  </div>
);
export default Topstories;
