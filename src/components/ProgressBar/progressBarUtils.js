export const checkBgColour = (num) => {
  if (num < 20) {
    return "#ff1919";
  } else if (num >= 20 && num <= 35) {
    return "#ffae19";
  } else {
    return "#76ee00";
  }
};
