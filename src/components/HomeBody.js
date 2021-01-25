import './HomeBody.css';
import States from './States';
import Sidebar from './Sidebar';
import React, { useState } from 'react';

const HomeBody = () => {
  const [color, setColor] = useState('');
  const states = ['West Virginia', 'Utah', 'Michigan'];
  const [foundCounter, setFoundCounter] = useState(0);
  const [showFinishModal, setShowFinishModal] = useState('hideFinished');

  const colorCorrect = (state) => {
    setColor(state);
  };

  const count1 = (number) => {
    setFoundCounter(number);

    if (foundCounter === states.length) {
      setShowFinishModal('showFinished');
    }
  };

  return (
    <div className="mainContent">
      <States
        states={states}
        markCorrect={(state) => colorCorrect(state)}
        mark={color}
        showFinish={showFinishModal}
      />
      <Sidebar
        states={states}
        mark={color}
        markCounter={(number) => count1(number)}
      />
    </div>
  );
};

export default HomeBody;
