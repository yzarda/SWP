import React, { useState, useEffect } from 'react';
import './App.css';
import Snowfall from './Snowfall';

const App = () => {
  const [secondsUntilChristmas, setSecondsUntilChristmas] = useState(0);
  const [secondsUntilNewYear, setSecondsUntilNewYear] = useState(0);

  useEffect(() => {
    const christmasDate = new Date('2024-12-25T00:00:00');
    const newYearDate = new Date('2025-01-01T00:00:00');

    const calculateSecondsUntil = (targetDate) => {
      const now = new Date();
      const differenceInSeconds = Math.floor((targetDate - now) / 1000);
      return differenceInSeconds >= 0 ? differenceInSeconds : 0;
    };

    setSecondsUntilChristmas(calculateSecondsUntil(christmasDate));
    setSecondsUntilNewYear(calculateSecondsUntil(newYearDate));

    const timer = setInterval(() => {
      setSecondsUntilChristmas(calculateSecondsUntil(christmasDate));
      setSecondsUntilNewYear(calculateSecondsUntil(newYearDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours} Stunden ${minutes} Minuten ${remainingSeconds} Sekunden`;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Snowfall />
        <h1 className="festive-title">Frohe Weihnachten und ein Frohes Neues Jahr!</h1>
        <div className="countdown">
          <div>
            <h2>Weihnachten 2024 Countdown:</h2>
            <p className="countdown-timer">{formatTime(secondsUntilChristmas)}</p>
          </div>
          <div>
            <h2>Neujahr 2025 Countdown:</h2>
            <p className="countdown-timer">{formatTime(secondsUntilNewYear)}</p>
          </div>
        </div>
   
      </header>
    </div>
  );
};

export default App;
