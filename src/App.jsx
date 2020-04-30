import React from 'react';
import './App.scss';
// COMPONENTS
import Forecast from './components/Forecast';
import Topstories from './components/TopStories';
import Gallery from './components/Gallery';
import UVindex from './components/UVindex/index';
import APOD from './components/APOD/index';

function App() {
  const Maincomponent = () => (
    <div className="">
      <div className="main-component_wrapper">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="night">
          <div className="shooting_star" />
          <div className="shooting_star" />
          <div className="shooting_star" />
        </div>
        <div className="header_container">
          <header className="main-component_header">
            <div className="titles_group">
              <div className="title">The Mars Weather Network</div>
              <div className="sub-title">The latest weather updates from Elysium Planitia. </div>
            </div>
          </header>
        </div>
        <div className="forecast_container">
          <Forecast />
        </div>
        <div className="UVindex_container">
          <UVindex />
        </div>
        <div className="APOD_container">
          <APOD />
        </div>
        <div className="top-stories_container">
          <Topstories />
        </div>
        <div className="gallery_container">
          <Gallery />
        </div>
        <div className="footer_wrapper" />
      </div>
    </div>
  );

  return (
    <Maincomponent />
  );
}

export default App;
