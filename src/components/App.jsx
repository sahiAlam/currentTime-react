import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setCurrentTime(newTime);
  }

  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
