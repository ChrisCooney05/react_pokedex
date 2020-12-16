/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../redux/actions/pokemonActions";

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
          <div className="item">
            <h1>Sprites</h1>
            <img src={data.sprites.front_default} alt="front" />
            <img src={data.sprites.back_default} alt="back" />
            <img src={data.sprites.front_shiny} alt="front-s" />
            <img src={data.sprites.front_shiny} alt="back-s" />
          </div>
          <div className="item">
            <h1>Stats</h1>
            {data.stats.map((el) => {
              return (
                <p>
                  {el.stat.name} {el.base_stat}
                </p>
              );
            })}
          </div>
          <div className="item">
            <h1>Abilities</h1>
            {data.abilities.map((el) => {
              return <p>{el.ability.name}</p>;
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
