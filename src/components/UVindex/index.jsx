import React from 'react';
import './UVindex.scss';

const UVindex = () => {
  const UVcontent = () => (
    <div className="UV_main">
      <div className="UVtitle">UV index</div>
      <div className="UVlevels">
        <div>
          <div className="color green">LOW</div>
        </div>
        <div>
          <div className="color yellow">MODERATE</div>
        </div>
        <div>
          <div className="color orange">HIGH</div>
        </div>
        <div>
          <div className="color red">VERY HIGH</div>
        </div>
        <div>
          <div className="color purple">EXTREME</div>
        </div>
      </div>
      <div className="extreme">
        <div className="purple">EXTREME:</div>
        <div className="warning">Extra protection is required. Minimum SPF 100 sunscreen strongly recommended</div>
      </div>
    </div>
  );

  return (
    <UVcontent />
  );
};


export default UVindex;
