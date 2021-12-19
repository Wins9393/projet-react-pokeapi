import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PokemonDetails } from "../../components";
import MainContext from "../../contexts";
import { useEffect } from "react/cjs/react.development";

const Pokemon = () => {
  const { slug } = useParams();
  const { fetchPokemonDetails, pokemonDetails } = useContext(MainContext);

  useEffect(() => {
    fetchPokemonDetails(slug);
  }, []);

  console.log(pokemonDetails);

  return <PokemonDetails slug={slug} pokemonDetails={pokemonDetails} />;
};

export default Pokemon;
