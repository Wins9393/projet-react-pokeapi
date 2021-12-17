import { useContext } from "react";
import { PokemonList } from "../components";
import MainContext from "../contexts/MainContext";

const Pokemons = () => {
  const { pokeapi, fetchPokeapi } = useContext(MainContext);

  return (
    <>
      <h2>Filtre à venir</h2>
      <br />
      <h1>Tous les Pokémons</h1>
      <PokemonList pokemonList={(pokeapi, fetchPokeapi)}></PokemonList>
    </>
  );
};

export default Pokemons;
