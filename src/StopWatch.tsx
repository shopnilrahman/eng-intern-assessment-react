import React from 'react';

interface StopwatchProps {
  elapsedTime: number;
  laps: number[];
}

const Stopwatch: React.FC<StopwatchProps> = ({ elapsedTime, laps }) => (
  <div>
    <div>Elapsed Time: {formatTime(elapsedTime)}</div>
    <div>
      Laps: {laps.map((lap, index) => <span key={index}>{formatTime(lap)} </span>)}
    </div>
  </div>
);

// Helper function to format time (e.g., convert seconds to MM:SS format)
const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${formattedMinutes}:${formattedSeconds}`;
};

export default Stopwatch;