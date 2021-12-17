import Pokemon from "../Pokemon";

const PokemonList = ({ pokemonList = [] }) => {
  if (pokemonList.length === 0) {
    return <div>Aucun Pokémon trouvé</div>;
  }

  return (
    <div>
      {pokemonList.map(({ ...pokemon }, index) => {
        console.log(pokemon);

        return <Pokemon key={pokemon.url} {...pokemon}></Pokemon>;
      })}
    </div>
  );
};

export default PokemonList;
