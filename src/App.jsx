import React from 'react';
import './global.scss';

//COMPONENTS
import Forecast from './components/Forecast';
import Topstories from './components/Topstories';

//IMAGES
import Marsgif from './assets/Mars.gif';

function App() {
 
  const Maincomponent = () => {


    return (
      <div className="main-component_container">
        <header className="main-component_header">
          
          <img className="mars-gif" src={Marsgif} />
          <div className="title">The Mars Weather Network</div>
        </header>
         <div className="forecast_container">
       <Forecast/>
        </div>
        <div className="spacer_medium"/>
        <div className="top-stories_container"></div>
        <Topstories/>
      </div>

    );
  }

  return (
    <Maincomponent />
  
  )
};

export default App;
