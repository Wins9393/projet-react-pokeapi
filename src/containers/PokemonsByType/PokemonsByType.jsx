import { PokemonList, FilterByType } from "../../components";
import MainContext from "../../contexts";
import { useContext, useEffect } from "react";

const PokemonsByType = () => {
  const { filteredByType, setFilteredByType, handleFilterByType } =
    useContext(MainContext);

  useEffect(() => {
    handleFilterByType();
    console.log(filteredByType);
  }, []);

  return (
    <>
      <FilterByType handleFilterByType={handleFilterByType}></FilterByType>
      <PokemonList pokemonList={filteredByType}></PokemonList>
    </>
  );
};

export default PokemonsByType;
