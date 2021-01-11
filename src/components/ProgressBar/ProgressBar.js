import React from "react";

const ProgressBar = (props) => {
  const { statNum, statName } = props;
  const completed = (statNum * 100) / 255;

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
    backgroundColor: "#76ee00",
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
