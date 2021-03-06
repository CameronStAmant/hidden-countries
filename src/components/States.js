import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import ContextMenu from './ContextMenu';

const States = (props) => {
  const [lastState, setLastState] = useState('');
  const [contextClassName, setContextClassName] = useState('contextMenuHide');
  const [xLocation, setXLocation] = useState('');
  const [yLocation, setYLocation] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const unmarkGreen = (state) => {
    props.markCorrect(state);
  };

  if (props.mark !== '') {
    lastState.target.style.fill = 'green';
  }

  const getState = (selectedState) => {
    if (lastState !== '') {
      if (
        props.mark === '' &&
        props.showFinish === 'hideFinished' &&
        lastState.target.style.fill !== 'green'
      ) {
        lastState.target.style.fill = '#f9f9f9';
      }
    }
    if (selectedState.target.style.fill !== 'green') {
      unmarkGreen('');
      setContextClassName('contextMenuHide');
      if (selectedState.target.id !== 'svg' && selectedState.target.id !== '') {
        selectedState.target.style.fill = 'plum';
        setSelectedState(selectedState);
        setContextClassName('contextMenuShow');
        setLastState(selectedState);
        setXLocation(selectedState.pageX);
        setYLocation(selectedState.pageY);
      }
    }
  };

  return (
    <div className="map" onClick={getState}>
      <ContextMenu
        className={contextClassName}
        style={[xLocation, yLocation]}
        states={props.states}
        selectedState={selectedState}
        markCorrect={props.markCorrect}
        finishClassName={props.showFinish}
        time={props.time}
        updateLeaderboard={props.updateLeaderboard}
        hideFinish={props.hideFinish}
      />
      <div>
        <ReactSVG src="/images/usa.svg" />
      </div>
    </div>
  );
};

export default States;
