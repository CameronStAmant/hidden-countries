import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import ContextMenu from './ContextMenu';

const States = (props) => {
  const [lastState, setLastState] = useState('');
  const [className, setclassName] = useState('contextMenuHide');
  const [xLocation, setXLocation] = useState('');
  const [yLocation, setYLocation] = useState('');

  const getState = (selectedState) => {
    if (lastState !== '') {
      lastState.target.style.fill = '#f9f9f9';
    }
    setclassName('contextMenuHide');
    if (selectedState.target.id !== 'svg' && selectedState.target.id !== '') {
      selectedState.target.style.fill = 'plum';
      setclassName('contextMenuShow');
      setLastState(selectedState);
      setXLocation(selectedState.pageX);
      setYLocation(selectedState.pageY);
    }
  };

  return (
    <div className="map" onClick={getState}>
      <ContextMenu
        className={className}
        style={[xLocation, yLocation]}
        states={props.states}
      />
      <ReactSVG src="/images/us.svg" />
    </div>
  );
};

export default States;
