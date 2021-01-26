import './HomeBody.css';
import States from './States';
import Sidebar from './Sidebar';
import React, { useState } from 'react';

const HomeBody = (props) => {
  const [color, setColor] = useState('');
  const states = ['West Virginia', 'Utah', 'Michigan'];
  const [foundCounter, setFoundCounter] = useState(0);
  const [showFinishModal, setShowFinishModal] = useState('hideFinished');
  const [updateLeaderboard, setUpdateLeaderboard] = useState(false);

  const colorCorrect = (state) => {
    setColor(state);
  };

  const count1 = (number) => {
    setFoundCounter(number);

    if (foundCounter === states.length && updateLeaderboard === false) {
      setShowFinishModal('showFinished');
      props.pause();
      props.timer(props.time);
    }
  };

  return (
    <div className="mainContent">
      <States
        states={states}
        markCorrect={(state) => colorCorrect(state)}
        mark={color}
        showFinish={showFinishModal}
        time={props.time}
        updateLeaderboard={() => setUpdateLeaderboard(true)}
        hideFinish={() => setShowFinishModal('hideFinished')}
      />
      <Sidebar
        states={states}
        mark={color}
        markCounter={(number) => count1(number)}
        showFinish={showFinishModal}
        updateLeaderboard={updateLeaderboard}
      />
    </div>
  );
};

export default HomeBody;
