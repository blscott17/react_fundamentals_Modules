// imrse
import React, { useState, useEffect } from 'react';

const TimerApp = () => {
  // Set up the STATE
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  // Create something that will call the tick method every 1 second or 1000 ms
  useEffect(() => {
    let interval = setInterval(() => tick(), 1000);
    return () => clearInterval(interval);
  });

  // Create TIMER METHOD named tick that adds 1 second to secondsElapsed.
  const tick = () => setSecondsElapsed(secondsElapsed + 1);
  return (
    <div>
      <h1 className='section-title'>React Timer</h1>
      {/* Display the STATE */}
      <div>Seconds Elapsed: {secondsElapsed}</div>
    </div>
  );
};

export default TimerApp;
