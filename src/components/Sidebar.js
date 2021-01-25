import './Sidebar.css';
import React, { useState } from 'react';
import { db } from '../services/firebase';

const Sidebar = (props) => {
  const [hasClass, setHasClass] = useState([]);
  const [leaderboardListLeft, setLeaderboardListLeft] = useState('');
  const [leaderboardListRight, setLeaderboardListRight] = useState('');

  const listStates = props.states.map((state) => {
    if (state === props.mark || hasClass.includes(state)) {
      if (hasClass.includes(state)) {
      } else {
        const addItem = (newItem) => setHasClass((a) => [...a, newItem]);
        addItem(state);
      }

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
  let leaderboardArray = [];

  const getTheData = () => {
    const leaderboard = db.ref().child('Leaderboard');
    leaderboard.off();
    if (leaderboardListLeft === '') {
      leaderboard.on('value', (snapshot) => {
        let data = snapshot.val();
        if (data !== null) {
          let counter = 0;
          leaderboardArray = data.map((x) => {
            counter += 1;
            return (
              <div>
                {counter}) {x}
              </div>
            );
          });
          while (leaderboardArray.length !== 10) {
            let leaderboardArrayLength = leaderboardArray.length;
            leaderboardArray.push('');
            leaderboardArray.fill(
              <div>{leaderboardArray.length})</div>,
              leaderboardArrayLength,
              11
            );
          }
          setLeaderboardListLeft(leaderboardArray.slice(0, 5));
          setLeaderboardListRight(leaderboardArray.slice(5, 10));
        }
      });
    }
  };

  getTheData();

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
          <div className="leftScores">{leaderboardListLeft}</div>
          <div className="rightScores">{leaderboardListRight}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
