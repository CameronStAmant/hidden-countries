import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import ContextMenu from './ContextMenu';

const States = (props) => {
  const [lastState, setLastState] = useState('');
  const [contextClassName, setContextClassName] = useState('contextMenuHide');
  const [xLocation, setXLocation] = useState('');
  const [yLocation, setYLocation] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const getState = (selectedState) => {
    if (lastState !== '') {
      lastState.target.style.fill = '#f9f9f9';
    }
    setContextClassName('contextMenuHide');
    if (selectedState.target.id !== 'svg' && selectedState.target.id !== '') {
      selectedState.target.style.fill = 'plum';
      setSelectedState(selectedState);
      setContextClassName('contextMenuShow');
      setLastState(selectedState);
      setXLocation(selectedState.pageX);
      setYLocation(selectedState.pageY);
    }
  };

  return (
    <div className="map" onClick={getState}>
      <ContextMenu
        className={contextClassName}
        style={[xLocation, yLocation]}
        states={props.states}
        selectedState={selectedState}
      />
      <ReactSVG src="/images/us.svg" />
    </div>
  );
};

export default States;
