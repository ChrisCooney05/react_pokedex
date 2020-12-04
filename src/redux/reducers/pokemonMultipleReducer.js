import * as TYPE from "../types";

const defaultState = {
  loading: false,
  data: {},
  errorMsg: "",
};

const pokemonMultipleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPE.POKEMON_MULTIPLE_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case TYPE.POKEMON_MULTIPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: {
          ...state.data,
          //[] to set variable to pokemons name
          [action.pokemonName]: action.payload,
        },
      };
    case TYPE.POKEMON_MULTIPLE_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to load Pokèmon",
      };
    default:
      return state;
  }
};

export default pokemonMultipleReducer;
