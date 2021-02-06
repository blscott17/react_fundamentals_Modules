//imsre
import React, { useState, useEffect, useRef } from 'react';

const StopWatchApp = () => {
  const startTimeRef = useRef(0);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(update, 10);
      return () => {
        clearInterval(interval);
      };
    }
  });

  const update = () => {
    const delta = Date.now() - startTimeRef.current;
    setTime(time + delta);
    startTimeRef.current = Date.now();
  };

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now();
  };

  const stop = () => {
    setIsRunning(false);
  };

  const lap = () => {
    setLaps([...laps, time]);
  };

  const reset = () => {
    setTime(0);
    setLaps([]);
  };

  return (
    <div>
      <h1 className='section-title'> React Stopwatch!</h1>
      {/* Wrap Math in Map.floor to round our numbers: (1) divide the time by 1000 to deal in seconds Not milliseconds (2) divide the seconds by 60 (/60) to get minutes passed, (3) use tthe modulus operator on the secodns to get the remaining seconds*/}
      <p>
        {Math.floor(time / 1000 / 60).toString()} :
        {Math.floor((time / 1000) % 60).toString()}
      </p>
      {/* Toggle the display to Stop / Start */}
      {isRunning ? (
        <button onClick={stop}>Stop</button>
      ) : (
        <button onClick={start}>Start</button>
      )}
      {/* Toggle the display to Stop / Start */}
      {isRunning ? (
        <button onClick={lap}>Lap</button>
      ) : (
        <button onClick={reset}>Reset</button>
      )}
      {/* Map - .map() over lap times and use same logic to format them as we did for time above. */}
      {laps.map((time) => {
        return (
          <p>
            {Math.floor(time / 1000 / 60).toString()} :
            {Math.floor((time / 1000) % 60).toString()}
          </p>
        );
      })}
    </div>
  );
};

export default StopWatchApp;
