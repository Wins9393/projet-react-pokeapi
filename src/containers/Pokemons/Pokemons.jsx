import { useContext } from "react";
import { PokemonList, Filter } from "../../components";
import MainContext from "../../contexts/";
import "./Pokemons.css";

const Pokemons = () => {
  const { filtered, handleFilter, inputSearched } = useContext(MainContext);
  return (
    <>
      <div className="searchForm">
        <h2 className="pageTitle">Search Pokemon by name</h2>
        <Filter inputSearched={inputSearched} handleFilter={handleFilter} />
      </div>
      <div className="containerList">
        <PokemonList pokemonList={filtered}></PokemonList>
      </div>
    </>
  );
};

export default Pokemons;
