import { ReactSVG } from 'react-svg';
import React, { useState } from 'react';
import MenuBar from './components/MenuBar';

function App() {
  const [lastState, setLastState] = useState('');

  const getState = (selectedState) => {
    if (selectedState.target.id !== 'svg' && selectedState.target.id !== '') {
      if (lastState !== '') {
        lastState.target.style.fill = '#f9f9f9';
      }
      selectedState.target.style.fill = 'plum';
      setLastState(selectedState);
    }
  };

  return (
    <div>
      <MenuBar />
      <div className="hiddenPopper" onClick={getState}>
        <ReactSVG src="/images/us.svg" />
      </div>
    </div>
  );
}

export default App;
