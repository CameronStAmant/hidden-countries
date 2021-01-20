import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';

const States = () => {
  const [lastState, setLastState] = useState('');

  const getState = (selectedState) => {
    if (selectedState.target.id !== 'svg' && selectedState.target.id !== '') {
      if (lastState !== '') {
        lastState.target.style.fill = '#f9f9f9';
      }
      selectedState.target.style.fill = 'plum';
      setLastState(selectedState);
    }
  };

  return (
    <div className="map" onClick={getState}>
      <ReactSVG src="/images/us.svg" />
    </div>
  );
};

export default States;
