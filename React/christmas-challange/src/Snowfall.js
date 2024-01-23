import React from 'react';
import './Snowfall.css';

const Snowfall = () => {
  const createRandomPosition = () => {
    const position = Math.random() * window.innerWidth;
    return { left: position, animationDelay: Math.random() * 10 };
  };

  return (
    <div className="snowfall-container">
      {Array.from({ length: 50 }, (_, index) => {
        const { left, animationDelay } = createRandomPosition();
        return (
          <div
            key={index}
            className="snowflake"
            style={{ left: `${left}px`, animationDelay: `-${animationDelay}s` }}
          />
        );
      })}
    </div>
  );
};

export default Snowfall;
