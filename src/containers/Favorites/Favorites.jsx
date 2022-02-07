import { useEffect, useContext } from "react";
import { PokemonList } from "../../components";
import MainContext from "../../contexts";

const Favorites = () => {
  const { handleHasSider } = useContext(MainContext);

  useEffect(() => {
    handleHasSider(true);
  }, []);

  return (
    <>
      <div className="searchForm">
        <h2 className="pageTitle">Your favorites pokemons</h2>
      </div>
      <div className="containerList">
        <PokemonList />
      </div>
    </>
  );
};

export default Favorites;
