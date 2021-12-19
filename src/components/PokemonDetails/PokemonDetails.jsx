const PokemonDetails = ({ slug, pokemonDetails }) => {
  return (
    <>
      <div>{pokemonDetails.name}</div>
      <img src={pokemonDetails.sprites.front_default} alt={slug} />
      <img src={pokemonDetails.sprites.back_default} alt={slug} />
      <br />
      <img src={pokemonDetails.sprites.front_shiny} alt={slug} />
      <img src={pokemonDetails.sprites.back_shiny} alt={slug} />

      <div></div>
    </>
  );
};

export default PokemonDetails;
