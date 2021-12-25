import { PokemonList, FilterByType } from "../../components";
import { useEffect, useState } from "react";

const PokemonsByType = () => {
  const [filteredByType, setFilteredByType] = useState();

  useEffect(() => {
    handleFilterByType();
  }, []);

  const handleFilterByType = async (type) => {
    if (!type) {
      setFilteredByType({ type: null });
      return;
    }
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await response.json();

      setFilteredByType(data.pokemon);

      // Tentative de mettre les données reçu par l'api /pokemons/:type
      // Dans le même format que celles reçu par l'api /pokemons/:name (sans succès)

      // const tmp = [];

      // filteredByType.map((object) => tmp.push(object.pokemon));
      // setFilteredByType(tmp);
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <div className="searchForm">
        <h2 className="pageTitle">Search Pokemon by type</h2>
        <FilterByType handleFilterByType={handleFilterByType}></FilterByType>
      </div>
      <div className="containerList">
        <PokemonList pokemonList={filteredByType}></PokemonList>
      </div>
    </>
  );
};

export default PokemonsByType;
