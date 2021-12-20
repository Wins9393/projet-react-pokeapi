import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PokemonDetails } from "../../components";
import MainContext from "../../contexts";
import { useEffect } from "react";

const Pokemon = () => {
  const { slug } = useParams("");
  const { fetchPokemonDetails, pokemonDetails, capitalize } =
    useContext(MainContext);

  console.log(slug);

  useEffect(() => {
    let active = true;
    fetchPokemonDetails(slug, active);
    return () => {
      active = false;
    };
  }, []);

  console.log(pokemonDetails);

  return (
    <PokemonDetails
      slug={slug}
      pokemonDetails={pokemonDetails}
      capitalize={capitalize}
    />
  );
};

export default Pokemon;
