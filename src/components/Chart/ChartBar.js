import React from "react";
import './ChartBar.css';

const ChartBar = (props) => {
  let maxHight = 0;

  if (props.maxValue > maxHight) {
    maxHight = props.value / props.maxValue * 100;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: `${maxHight}%`}}></div>
      </div>
      <div className="chart-bar__label">
        {props.label}
      </div>
    </div>
  )
};

export default ChartBar;
