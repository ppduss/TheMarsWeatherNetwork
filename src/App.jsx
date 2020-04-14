import React from 'react';
import './App.scss';
// COMPONENTS
import Forecast from './components/Forecast';
import Topstories from './components/TopStories';
import Gallery from './components/Gallery';
import UVindex from './components/UVindex/index';
// IMAGES
import Marsgif from './assets/Mars.gif';

function App() {
  const Maincomponent = () => (
    <div className="main-component_wrapper">
      <div className="header_container">
        <header className="main-component_header">
          {/* <img className="mars-gif" alt="marsgif" src={Marsgif} /> */}
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
      <div className="top-stories_container">
        <Topstories />
      </div>
      <div className="gallery_container">
        <Gallery />
      </div>
    </div>
  );

  return (
    <Maincomponent />
  );
}

export default App;
