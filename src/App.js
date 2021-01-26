import MenuBar from './components/MenuBar';
import HomeBody from './components/HomeBody';
import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (isActive) {
      let timer;
      if (isActive) {
        timer = setInterval(() => {
          setTime(time + 1);
        }, 1000);
      } else {
        clearInterval(timer);
      }
      return () => {
        clearInterval(timer);
      };
    }
  }, [isActive, time]);

  return (
    <div>
      <MenuBar time={time} />
      <HomeBody
        pause={() => setIsActive(false)}
        time={time}
        timer={(state) => setTime(state)}
      />
    </div>
  );
}

export default App;
