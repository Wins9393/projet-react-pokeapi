import { PokemonList } from "../../components";

const Favorites = () => {
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
