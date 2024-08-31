import React from 'react';
import './CircularProgress.css';

const CircularProgress = ({ percentage = 70 }) => {
  const radius = 45; 
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg
        className="circular-progress-svg"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
      >
        <circle
          className="circular-progress-background"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth="10"
        />
        <circle
          className="circular-progress-bar"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth="10"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
        />
        <text
          x="50%"
          y="50%"
          className="circular-progress-text"
          alignmentBaseline="middle"
          textAnchor="middle"
          dominantBaseline="central" // Adjusts vertical alignment
        >
          {percentage}
          <tspan x="50%" dy="1.2em">%</tspan> {/* Adds '%' below the percentage */}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
