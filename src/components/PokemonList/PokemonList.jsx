import Pokemon from "../Pokemon";

const PokemonList = ({ pokemonList = [] }) => {
  if (pokemonList.length === 0) {
    return <div>Aucun Pokémon trouvé</div>;
  }

  return (
    <div>
      {pokemonList.map(({ ...pokemon }) => {
        const urlId = pokemon.url.split("/");
        const id = urlId[6];

        return <Pokemon key={id} id={id} {...pokemon}></Pokemon>;
      })}
    </div>
  );
};

export default PokemonList;
