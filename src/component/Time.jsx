import React, { useEffect, useState } from "react";
import UsestateHook from "./UsestateHook";

export default function Time() {
  const [sec, setSec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setSec(0);
    setIsRunning(false);
  };
  return (
    <div>
      <h2>Timer : {sec}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
