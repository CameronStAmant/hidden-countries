import './HomeBody.css';
import States from './States';
import Sidebar from './Sidebar';
import React, { useState } from 'react';

const HomeBody = () => {
  const [color, setColor] = useState('');
  const states = ['West Virginia', 'Utah', 'Michigan'];

  const colorCorrect = (state) => {
    setColor(state);
  };

  return (
    <div className="mainContent">
      <States
        states={states}
        markCorrect={(state) => colorCorrect(state)}
        mark={color}
      />
      <Sidebar states={states} mark={color} />
    </div>
  );
};

export default HomeBody;
