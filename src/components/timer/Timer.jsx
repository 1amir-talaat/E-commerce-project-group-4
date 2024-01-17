import React from "react";
import { useTimer } from "react-timer-hook";

import "./Timer.css";

function Timer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days, isRunning } = useTimer({
    expiryTimestamp,
    autoStart: true,
  });

  return (
    <div className="d-flex align-items-center gap-2">
      <span>
        <span className="days">
          <span>{days}</span>
          <span className="days-text">days</span>
        </span>
      </span>
      <span className="countdown rounded-pill text-white">
        <span>{hours}</span>
      </span>
      <span className="countdown p-1 rounded-pill text-white">
        <span>{minutes}</span>
      </span>
      <span className="countdown last p-1 rounded-pill text-white">
        <span>{seconds}</span>
      </span>
    </div>
  );
}

export default Timer;
