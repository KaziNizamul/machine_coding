import React, { useEffect } from "react";
import "./index.css";

const ProgressBar = ({ value = 0, onComplete }) => {
  const [percent, setPercent] = React.useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(0, value)));
    if (value >= 100) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="progressBarContainer">
      <span className="progressPercent">{percent}%</span>
      <div
        className="progressBar"
        style={{
          transform: `scaleX(${percent / 100})`,
          transformOrigin: "left",
        }}
      />
    </div>
  );
};

export default ProgressBar;
