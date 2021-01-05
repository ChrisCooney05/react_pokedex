import React from "react";
import "./App.css";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import PokemonList from "./components/PokemonList/PokemonList";
import Pokemon from "./components/Pokemon/Pokemon";

// () => {} vs () => () we can omit the use of wrapping everything in a return()
const App = () => (
  <div className="App">
    <nav>
      <NavLink to={"/"}>Home</NavLink>
    </nav>
    <Switch>
      <Route path={"/"} exact component={PokemonList} />
      <Route
        path={"/pokemon/:pokemon"}
        exact
        // using render over component means I can pass through extra props if I want
        render={(props) => <Pokemon text={"Test"} {...props} />}
        //component={Pokemon}
      />
      <Redirect to={"/"} />
    </Switch>
  </div>
);

export default App;
