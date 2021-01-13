/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../redux/actions/pokemonActions";
import ProgressBar from "../ProgressBar/ProgressBar";
import Sprites from "../Sprites/Sprites";

const Pokemon = (props) => {
  //name is passed via Link through props
  console.log(props, "Props");
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.Pokemon);
  const data = pokemonData.data[pokemonName];

  useEffect(() => {
    if (!data) {
      dispatch(getPokemon(pokemonName));
    }
  }, []);

  const showData = () => {
    if (data) {
      return (
        <div className="pokemon-wrapper">
          <Sprites spriteSrc={data.sprites} />
          <div className="item">
            <h1>Stats</h1>
            {data.stats.map((el) => {
              return (
                <p>
                  <ProgressBar
                    key={el.stat.name}
                    statName={el.stat.name}
                    statNum={el.base_stat}
                  />
                </p>
              );
            })}
          </div>
        </div>
      );
    }
    if (pokemonData.loading) {
      return <p>...Loading</p>;
    }
    if (pokemonData.errorMsg) {
      return <p>{pokemonData.errorMsg}</p>;
    }
  };
  return (
    <div className="pokemon">
      <h1>{pokemonName}</h1>
      {showData()}
    </div>
  );
};

export default Pokemon;
