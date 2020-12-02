import React from "react";
import "./App.css";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import PokemonList from "./components/PokemonList/PokemonList";
import Pokemon from "./components/Pokemon/Pokemon";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Home</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
