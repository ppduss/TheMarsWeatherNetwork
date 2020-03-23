import React from 'react';
import './global.scss';

// COMPONENTS
import Forecast from './components/Forecast';
import Topstories from './components/TopStories';
import Gallery from './components/Gallery';

// IMAGES
import Marsgif from './assets/Mars.gif';

function App() {
  const Maincomponent = () => (
    <div className="main-component_container">
      <header className="main-component_header">

        <img className="mars-gif" alt="marsgif" src={Marsgif} />
        <div className="titles_group">
          {/* <div className="spacer_small" /> */}
          <div className="title">The Mars Weather Network</div>
          <div className="sub-title">The latest weather updates from Elysium Planitia, Mars. </div>
        </div>
      </header>
      <div className="forecast_container">
        <Forecast />
      </div>
      <div className="spacer_medium" />

      <div className="top-stories_container">
        <Topstories />
        <div />
        <div className="spacer" />
        <div className="gallery_container">
          <Gallery />
        </div>
      </div>
    </div>

  );

  return (
    <Maincomponent />

  );
}

export default App;
