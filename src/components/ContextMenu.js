import './ContextMenu.css';
import { db } from '../services/firebase';
import React, { useState } from 'react';
import CorrectIncorrect from './CorrectIncorrectPopup';

const ContextMenu = (props) => {
  const [correctIncorrectState, setCorrectIncorrectState] = useState(
    'correctIncorrectHidePopup'
  );
  const [timerReset, setTimerReset] = useState(null);
  const chosenState = (state) => {
    const results = db.ref();
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

      if (match === true) {
        setCorrectIncorrectState('correctPopup');
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
    </div>
  );
};

export default ContextMenu;
