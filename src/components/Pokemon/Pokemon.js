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
    if (!pokemonData.data[pokemonName]) {
      dispatch(getPokemon(pokemonName));
    }
  }, []);

  const showData = () => {
    if (pokemonData.data[pokemonName]) {
      return <p>Have Data</p>;
    }
    if (pokemonData.loading) {
      return <p>...Loading</p>;
    }
    if (pokemonData.errorMsg) {
      return <p>{pokemonData.errorMsg}</p>;
    }
  };
  return <div>{showData()}</div>;
};

export default Pokemon;
