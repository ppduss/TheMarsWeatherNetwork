import React from 'react';
import './UVindex.scss';

const UVindex = () => {
  const UVcontent = () => (
    <div className="UV_main">
      <div>UV index</div>
      <div className="UVlevels">
        <div>
          <div className="green">LOW</div>
        </div>
        <div>
          <div className="yellow">MODERATE</div>
        </div>
        <div>
          <div className="orange">HIGH</div>
        </div>
        <div>
          <div className="red">VERY HIGH</div>
        </div>
        <div>
          <div className="purple">EXTREME</div>
        </div>
      </div>
      <div className="extreme">SPF 100 sunscreen strongly suggested</div>
    </div>
  );

  return (
    <UVcontent />
  );
};


export default UVindex;
