import MenuBar from './components/MenuBar';
import HomeBody from './components/HomeBody';
import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <MenuBar time={time} />
      <HomeBody />
    </div>
  );
}

export default App;
