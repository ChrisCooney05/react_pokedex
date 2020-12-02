import { combineReducers } from "redux";
import pokemonListReducer from "./pokemonListReducer";

const rootReducer = combineReducers({
  PokemonList: pokemonListReducer,
});

export default rootReducer;
