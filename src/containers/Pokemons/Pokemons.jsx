import { useContext } from "react";
import { PokemonList, Filter } from "../../components";
import MainContext from "../../contexts/";

const Pokemons = () => {
  const { filtered, handleFilter } = useContext(MainContext);

  return (
    <>
      <h2>Filtre à venir</h2>
      <Filter handleFilter={handleFilter} />
      <h1>Tous les Pokémons</h1>
      <PokemonList pokemonList={filtered}></PokemonList>
    </>
  );
};

export default Pokemons;
