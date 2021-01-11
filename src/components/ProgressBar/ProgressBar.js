import React from "react";

const ProgressBar = (props) => {
  const { statNum, statName } = props;
  const completed = (statNum * 100) / 255;

  const checkBgColour = (num) => {
    if (num < 20) {
      return "#ff1919";
    } else if (num >= 20 && num <= 35) {
      return "#ffae19";
    } else {
      return "#76ee00";
    }
  };

  const containerStyles = {
    height: 20,
    width: "33%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 10,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: checkBgColour(completed),
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div className="stat-bar">
      {statName}:
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
