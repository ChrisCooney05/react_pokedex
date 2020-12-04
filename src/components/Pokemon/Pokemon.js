/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../redux/actions/pokemonActions";

const Pokemon = (props) => {
  //name is passed via Link through props
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.Pokemon);

  useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, []);
  return <div>Pokemon</div>;
};

export default Pokemon;
