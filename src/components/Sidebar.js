import './Sidebar.css';
import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';

const Sidebar = (props) => {
  const [hasClass, setHasClass] = useState([]);
  const [leaderboardListLeft, setLeaderboardListLeft] = useState('');
  const [leaderboardListRight, setLeaderboardListRight] = useState('');
  const [reset, setReset] = useState(false);

  const listStates = props.states.map((state, index) => {
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
      return <li key={state}>{state}</li>;
    }
  });

  const getTheData = (state) => {
    let data = [];
    let leaderboardObjects = [];
    let leaderboard = db.ref().child('Leaderboard').orderByChild('score');

    if (leaderboardListLeft === '' || state === 'update') {
      data = [];
      leaderboard.on('value', (snapshot) => {
        snapshot.forEach(function (child) {
          data.push(child.val());
        });

        if (data !== null) {
          let counter = 0;
          leaderboardObjects = data.map((x, index) => {
            counter += 1;
            return (
              <div key={index}>
                {counter}) {x.score}: {x.name}
              </div>
            );
          });
          while (leaderboardObjects.length <= 10) {
            let leaderboardObjectsLength = leaderboardObjects.length;
            leaderboardObjects.push('');
            leaderboardObjects.fill(
              <div key={leaderboardObjects.length}>
                {leaderboardObjects.length})
              </div>,
              leaderboardObjectsLength,
              11
            );
          }
          setLeaderboardListLeft(leaderboardObjects.slice(0, 5));
          setLeaderboardListRight(leaderboardObjects.slice(5, 10));
        }
      });
    }
  };

  getTheData();

  useEffect(() => {
    props.markCounter(hasClass.length);
  });

  if (props.updateLeaderboard === true && reset === false) {
    getTheData('update');
    setReset(true);
  }

  return (
    <div className="sideMenu">
      <div className="description">
        <div>
          Find the states below by clicking on a state on the map and choosing
          its name from the list that appears. Once you finish, add your name to
          the leaderboards!
        </div>
        <ul className="hiddenStates">{listStates}</ul>
      </div>
      <div className="leaderboard">
        Leaderboards (The lower the better)
        <div className="highScores">
          <div className="leftScores">{leaderboardListLeft}</div>
          <div className="rightScores">{leaderboardListRight}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
