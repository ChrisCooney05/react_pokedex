import * as TYPE from "../types";

const defaultState = {
  loading: false,
  pokemonData: [],
  errorMessage: "",
};

const pokemonListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPE.POKEMON_LIST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TYPE.POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonData: action.payload,
      };
    case TYPE.POKEMON_LIST_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: "Unable to retrieve Pokèmon data",
      };
    default:
      return state;
  }
};

export default pokemonListReducer;
