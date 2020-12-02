/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonList } from '../../redux/actions/pokemonActions';

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.PokemonList)

  useEffect(() => {
    fetchPokemon(1)
  }, [])

  const fetchPokemon = (page = 1) => {
    dispatch(getPokemonList(page))
  } 

  const showData = () => {
    if (!pokemonList.pokemonData.length) {
      return <p>Have Data</p>
    }
    if (pokemonList.loading) {
      return <p>...Loading</p>
    }
    if (pokemonList.errorMsg) {
      return <p>{pokemonList.errorMsg}</p>
    }
  }
  return (
    <div>
      {showData()}
    </div>
  )
}

export default PokemonList