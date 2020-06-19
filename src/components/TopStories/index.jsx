import React, { useEffect, useState } from 'react';
import './TopStories.scss';
//  CAROUSEL  //
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
//  IMAGES  //
import manfell2 from '../../assets/images/manFell2.jpeg';
import korolevcrater from '../../assets/images/korolevcrater.jpeg';
import aliens from '../../assets/images/aliens.jpeg';
import thicc from '../../assets/images/thicc.jpeg';
import suburb from '../../assets/images/suburb.jpeg';
import pkdbooks from '../../assets/images/pkdBook.jpeg';
import flat from '../../assets/images/flat.jpeg';
import sauvage from '../../assets/images/sauvage.jpeg';
import orbit from '../../assets/images/orbit.gif';
import android2 from '../../assets/images/android2.jpeg';
import sandy from '../../assets/images/surfaceGrey.jpeg';


const Topstories = () => (
  <div>
    <div className="top-stories_header">Top Stories</div>
    <div>
      <Carousel
        autoPlay={8000}
        animationSpeed={1000}
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
        <a target="_blank" rel="noopener noreferrer" href="https://en.uncyclopedia.co/wiki/Ancient_Aliens">
          <div className="story">
            <img src={aliens} alt="life on Mars ?" />
            <div className="story_txt_title">What will we find beneath Mars&apos; icy surface?</div>
          <div className="story_txt">You’ll never guess this expert&apos;s shocking answer!</div>
          </div>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Erg_(landform)">
          <div className="story">
            <img src={sandy} alt="Sandy" />
            <div className="story_txt_title">How sandy is the Red Planet?</div>
            <div className="story_txt">NASA experts finally open up about the issue: &quot;It&apos;s pretty sandy&quot;.</div>
          </div>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.spacex.com/mars">
          <div className="story">
            <img src={thicc} alt="thicc" />
            <div className="story_txt_title">SpaceX Mars Mission Update</div>
            <div className="story_txt">Elon announces exciting new Titanium Hull Interplanetary & Cosmic Craft (THICC) rocket.</div>
          </div>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Philip_K._Dick">
          <div className="story">
            <img src={pkdbooks} alt="android rights" />
            <div className="story_txt_title">Philip K. Dick deemed &quot;innapropriate for school&quot;</div>
            <div className="story_txt">Android rights experts claim the 20th century author&apos;s work &quot;robophobic&quot; and &quot;obsessed with sheep&quot;.</div>
          </div>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=YF_ESqYuhSQ">
          <div className="story">
            <img src={manfell2} alt="Is the Starman in space ?" />
            <div className="story_txt_title">Is David Bowie really dead?</div>
            <div className="story_txt">Or did &quot;The Man Who Fell to Earth&quot; simply return home?</div>
          </div>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.npr.org/2018/12/21/679155506/huge-martian-crater-korolev-appears-topped-with-miles-of-pristine-snow">
          <div className="story">
            <img src={korolevcrater} alt="Korolev" />
            <div className="story_txt_title">This year&apos;s best ski destination.</div>
            <div className="story_txt">Why this is the year the Korolev crater is destined to shine.</div>
          </div>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.marscitydesign.com/mojave-desert">
          <div className="story">
            <img src={suburb} alt="suburb" />
            <div className="story_txt_title">Urban Planner can&apos;t wait to turn Mars into suburban sprawl.</div>
            <div className="story_txt">&quot;It&apos;s gonna be lit.&quot;</div>
          </div>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.criterion.com/films/28636-fantastic-planet">
          <div className="story">
            <img src={sauvage} alt="sauvage" />
            <div className="story_txt_title">Century-old animation uncovered from ruins</div>
            <div className="story_txt">Strange movie titled &quot;La Planete Sauvage&quot; turn 100 years old. </div>
          </div>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="http://www.the13thfloor.tv/2016/04/12/i-feel-fantastic-the-horrifying-history-of-tara-the-android/">
          <div className="story">
            <img src={android2} alt="android" />
            <div className="story_txt_title">Android Awareness Month</div>
            <div className="story_txt">Debunking the top 10 myths about our mechanical bretheren.</div>
          </div>
        </a>
         <a target="_blank" rel="noopener noreferrer" href="https://www.sciencealert.com/the-flat-earth-society-responded-elon-musk-twitter-beautiful-mars-conspiracy">
          <div className="story">
            <img src={flat} alt="flat" />
            <div className="story_txt_title">Flat Earth Society: &quot;Mars is round.&quot;</div>
            <div className="story_txt">Group unironically claims &quot;Mars has been observed to be round.&quot; </div>
          </div>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/FdE5vIG92B8">
          <div className="story">
            <img src={orbit} alt="orbit" />
            <div className="story_txt_title">Mars&apos; controversial orbit</div>
            <div className="story_txt">Hasbro lawyers issue copyright infrigement lawsuit over Spirograph-shaped elipse.</div>
          </div>
        </a>
      </Carousel>
    </div>
  </div>
);
export default Topstories;
