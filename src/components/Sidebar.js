import './Sidebar.css';
import React, { useState } from 'react';

const Sidebar = (props) => {
  const [hasClass, setHasClass] = useState([]);
  console.log('hi');

  const listStates = props.states.map((state) => {
    if (state === props.mark || hasClass.includes(state)) {
      if (hasClass.includes(state)) {
      } else {
        const addItem = (newItem) => setHasClass((a) => [...a, newItem]);
        addItem(state);
      }

      console.log(hasClass);
      return (
        <li className="green" key={state}>
          {state}
        </li>
      );
    } else {
      return (
        <li className="d" key={state}>
          {state}
        </li>
      );
    }
  });

  return (
    <div className="sideMenu">
      <div className="description">
        <div>
          Find the states below by clicking on them and choosing them from
          within the list that appears.
        </div>
        <ul className="hiddenStates">{listStates}</ul>
      </div>
      <div className="leaderboard">
        Leaderboards
        <div className="highScores">
          <div className="leftScores">
            <div>1)</div>
            <div>2)</div>
            <div>3)</div>
            <div>4)</div>
            <div>5)</div>
          </div>
          <div className="rightScores">
            <div>6)</div>
            <div>7)</div>
            <div>8)</div>
            <div>9)</div>
            <div>10)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
