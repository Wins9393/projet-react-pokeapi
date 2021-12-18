import { useContext } from "react";
import { PokemonList, Filter } from "../../components";
import MainContext from "../../contexts/";

const Pokemons = () => {
  const { filtered, handleFilter, inputSearched } = useContext(MainContext);

  return (
    <>
      <h2>Cherchez un pokémon par nom</h2>
      <Filter inputSearched={inputSearched} handleFilter={handleFilter} />
      <h1>Tous les Pokémons</h1>
      <PokemonList pokemonList={filtered}></PokemonList>
    </>
  );
};

export default Pokemons;
