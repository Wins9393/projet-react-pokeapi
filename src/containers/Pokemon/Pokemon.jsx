import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PokemonDetails } from "../../components";
import MainContext from "../../contexts";
import { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemonDetails, setPokemonDetails] = useState({
    pokemon: [],
    isFetching: false,
  });
  const [loading, setLoading] = useState(true);
  const { slug } = useParams("");
  const { addToFavorites, isFavorite, capitalize } = useContext(MainContext);

  const fetchPokemonDetails = async (name) => {
    try {
      setPokemonDetails({ pokemon: pokemonDetails.pokemon, isFetching: true });
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();

      setPokemonDetails({ pokemon: data, isFetching: false });

      setTimeout(() => {
        setLoading(false);
      }, 400);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchPokemonDetails(slug);
  }, []);

  return (
    <PokemonDetails
      slug={slug}
      pokemonDetails={pokemonDetails}
      capitalize={capitalize}
      addToFavorites={addToFavorites}
      isFavorite={isFavorite}
      loading={loading}
    />
  );
};

export default Pokemon;
