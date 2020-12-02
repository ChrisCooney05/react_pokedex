import axios from "axios";
import * as TYPE from "../types";

export const getPokemonList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: TYPE.POKEMON_LIST_LOADING,
    });

    const limit = 15;
    const offset = page * limit - limit;
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}"`
    );

    dispatch({
      type: TYPE.POKEMON_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TYPE.POKEMON_LIST_FAIL,
    });
  }
};
