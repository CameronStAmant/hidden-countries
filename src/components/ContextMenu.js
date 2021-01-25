import './ContextMenu.css';
import { db } from '../services/firebase';
import React, { useState } from 'react';
import CorrectIncorrect from './CorrectIncorrectPopup';
import FinishModal from './popupModal';

const ContextMenu = (props) => {
  const [correctIncorrectState, setCorrectIncorrectState] = useState(
    'correctIncorrectHidePopup'
  );
  const [timerReset, setTimerReset] = useState(null);
  const chosenState = (state) => {
    const results = db.ref().child('States');
    results.once('value', function (e) {
      let data = e.val();
      let match = false;
      for (let i = 0; i < Object.keys(data).length; i++) {
        if (
          Object.values(data)[i] ===
            props.selectedState.target.attributes[2].value &&
          Object.keys(data)[i] === state
        ) {
          match = true;
        }
      }

      let timer;

      const startTimer = () => {
        timer = setTimeout(() => {
          setCorrectIncorrectState('correctIncorrectHidePopup');
        }, 2000);
        setTimerReset(timer);
      };

      const stopTimer = () => {
        clearTimeout(timerReset);
      };

      const markGreen = (state) => {
        props.markCorrect(state);
      };

      if (match === true) {
        setCorrectIncorrectState('correctPopup');
        markGreen(state);
      } else {
        setCorrectIncorrectState('incorrectPopup');
      }

      stopTimer();
      startTimer();
    });
  };

  const listStates = props.states.map((state) => (
    <button key={state} onClick={() => chosenState(state)}>
      {state}
    </button>
  ));
  return (
    <div>
      <CorrectIncorrect className={correctIncorrectState} />
      <div
        className={props.className}
        style={{ left: props.style[0] + 15, top: props.style[1] + 15 }}
      >
        {listStates}
      </div>
      <FinishModal className={props.finishClassName} />
    </div>
  );
};

export default ContextMenu;
