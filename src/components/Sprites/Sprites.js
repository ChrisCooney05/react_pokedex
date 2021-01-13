import React from "react";

const Sprites = (props) => {
  const {
    front_default,
    back_default,
    front_shiny,
    back_shiny,
  } = props.spriteSrc;

  return (
    <div className="item">
      <h1>Sprites</h1>
      <img src={front_default} alt="front" />
      <img src={back_default} alt="back" />
      <img src={front_shiny} alt="front-s" />
      <img src={back_shiny} alt="back-s" />
    </div>
  );
};

export default Sprites;
