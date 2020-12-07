/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "../../redux/actions/pokemonActions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const PokemonList = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  useEffect(() => {
    fetchPokemon(1);
  }, []);

  const fetchPokemon = (page = 1) => {
    dispatch(getPokemonList(page));
  };

  const showData = () => {
    if (pokemonList.loading) {
      return <p>...Loading</p>;
    }

    if (pokemonList.pokemonData.length) {
      return (
        <div className="list-wrapper">
          {pokemonList.pokemonData.map((pokemon) => {
            return (
              <div className="pokemon-item" key={pokemon.name}>
                <p>{pokemon.name}</p>
                {/* Link passes info as props to Pokemon component so I can use the pokemon name later */}
                <Link to={`/pokemon/${pokemon.name}`}>View</Link>
              </div>
            );
          })}
        </div>
      );
    }
    if (pokemonList.errorMsg) {
      return <p>{pokemonList.errorMsg}</p>;
    }
  };
  return (
    <div>
      <div className="search-wrapper">
        <p>Search: </p>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        {/* on click we go to the /pokemon route using our state as a param */}
        <button onClick={() => props.history.push(`/pokemon/${search}`)}>
          Search
        </button>
      </div>
      {showData()}
      {pokemonList.pokemonData.length && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 15)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => fetchPokemon(data.selected + 1)}
        />
      )}
    </div>
  );
};

export default PokemonList;
