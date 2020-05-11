import React, { useEffect, useState } from 'react';
import './TopStories.scss';
//  CAROUSEL  //
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
//  IMAGES  //
import manfell2 from '../../assets/images43/manFell2.jpeg';
import korolevcrater from '../../assets/images43/korolevcrater.jpeg';
import aliens from '../../assets/images43/aliens.jpeg';
import thicc from '../../assets/images43/thicc.jpeg';
import suburb from '../../assets/images43/suburb.jpeg';
import pkdbooks from '../../assets/images43/pkdBook.jpeg';
import flat from '../../assets/images43/flat.jpeg';
import sauvage from '../../assets/images43/sauvage.jpeg';
import orbit from '../../assets/images43/orbit.gif';
import android2 from '../../assets/images43/android2.jpeg';
import sandy from '../../assets/images43/surfaceGrey.jpeg';


const Topstories = () => (
  <div>
    <div className="top-stories_header">Top Stories</div>
    <div>
      <Carousel
        // autoPlay={7000}
        animationSpeed={1500}
        dots
        infinite
        keepDirectionWhenDragging
        slidesPerPage={1}
        breakpoints={{
          400: {
            slidesPerPage: 1,
          },
          600: {
            slidesPerPage: 1.75,
          },
          800: {
            slidesPerPage: 2.25,
          },
          900: {
            slidesPerPage: 2.5,
          },
          1000: {
            slidesPerPage: 2.75,
          },
          1350: {
            slidesPerPage: 3.5,
          },
          1600: {
            slidesPerPage: 4,
          },
          2000: {
            slidesPerPage: 4.5,
          },
          4000: {
            slidesPerPage: 5.5,
          },
        }}
        offset={0}
        >
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://en.uncyclopedia.co/wiki/Ancient_Aliens">
            <img src={aliens} alt="life on Mars ?" />
          </a>
          <div className="story_txt_title">What will we find beneath Mars&apos; icy surface?</div>
          <div className="story_txt">You’ll never guess this expert&apos;s shocking answer!</div>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=YF_ESqYuhSQ">
            <img src={manfell2} alt="Is the Starman in space ?" />
          </a>
          <div className="story_txt_title">Is David Bowie really dead?</div>
          <div className="story_txt">Or did &quot;The Man Who Fell to Earth&quot; simply return home?</div>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://www.npr.org/2018/12/21/679155506/huge-martian-crater-korolev-appears-topped-with-miles-of-pristine-snow">
            <img src={korolevcrater} alt="Korolev" />
          </a>
          <div className="story_txt_title">This year&apos;s best ski destination.</div>
          <div className="story_txt">Why this is the year the Korolev crater is destined to shine.</div>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://www.marscitydesign.com/mojave-desert">
            <img src={suburb} alt="suburb" />
          </a>
          <div className="story_txt_title">Urban Planner can&apos;t wait to turn Mars into suburban sprawl.</div>
          <div className="story_txt">&quot;It&apos;s gonna be lit.&quot;</div>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Erg_(landform)">
            <img src={sandy} alt="Sandy" />
          </a>
          <div className="story_txt_title">How sandy is the Red Planet?</div>
          <div className="story_txt">NASA experts finally open up about the issue: &quot;It&apos;s pretty sandy&quot;.</div>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://www.spacex.com/mars">
            <img src={thicc} alt="thicc" />
          </a>
          <div className="story_txt_title">SpaceX Mars Mission Update</div>
          <div className="story_txt">Elon announces exciting new Titanium Hull Interplanetary & Cosmic Craft (THICC) rocket.</div>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Philip_K._Dick">
            <img src={pkdbooks} alt="android rights" />
          </a>
          <div className="story_txt_title">Philip K. Dick deemed &quot;innapropriate for school&quot;</div>
          <div className="story_txt">Android rights experts claim the 20th century author&apos;s work &quot;robophobic&quot; and &quot;obsessed with sheep&quot;.</div>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://www.criterion.com/films/28636-fantastic-planet">
            <img src={sauvage} alt="sauvage" />
          </a>
          <div className="story_txt_title">Century-old animation uncovered from ruins</div>
          <div className="story_txt">Strange movie titled &quot;La Planete Sauvage&quot; turn 100 years old. </div>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="http://www.the13thfloor.tv/2016/04/12/i-feel-fantastic-the-horrifying-history-of-tara-the-android/">
            <img src={android2} alt="android" />
          </a>
          <div className="story_txt_title">Android Awareness Month</div>
          <div className="story_txt">Debunking the top 10 myths about our mechanical bretheren.</div>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://www.sciencealert.com/the-flat-earth-society-responded-elon-musk-twitter-beautiful-mars-conspiracy">
            <img src={flat} alt="flat" />
          </a>
          <div className="story_txt_title">Flat Earth Society: &quot;Mars is round.&quot;</div>
          <div className="story_txt">Group unironically claims &quot;Mars has been observed to be round.&quot; </div>
        </div>
        <div className="story">
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=LKYPYj2XX80">
            <img src={orbit} alt="orbit" />
          </a>
          <div className="story_txt_title">Mars&apos; controversial orbit</div>
          <div className="story_txt">Hasbro lawyers issue copyright infrigement lawsuit over Spirograph-shaped elipse.</div>
        </div>
      </Carousel>
    </div>
  </div>
);
export default Topstories;
