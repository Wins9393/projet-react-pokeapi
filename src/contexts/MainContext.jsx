import { createContext, useState, useEffect } from "react";
import { useMatch } from "react-router-dom";

const MainContext = createContext({});

const Provider = ({ children }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokeapi, setPokeapi] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [filtered, setFiltered] = useState(pokeapi);
  const [inputSearched, setInputSearched] = useState();
  let match = useMatch("/filter/:slug");

  useEffect(() => {
    fetchPokeapi();
  }, []);

  const fetchPokeapi = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
      );
      const data = await response.json();

      setLoading(false);
      setPokeapi(data.results);
      setFiltered(data.results);
      // Tentative de synchroniser l'url avec le input
      // matchParamsWithInput();
    } catch (err) {
      setError(true);
      throw err;
    }
  };

  const fetchPokemonDetails = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();

      setPokemonDetails(data);
      console.log(pokemonDetails);
    } catch (err) {
      throw err;
    }
  };

  const handleFilter = (event) => {
    event.preventDefault();

    const inputValue = event.target[0].value;

    const searched = pokeapi.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setInputSearched(inputValue);
    setFiltered(searched);
  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Tentative de synchroniser l'url avec le input

  // const matchParamsWithInput = () => {
  //   if (match) {
  //     console.log(pokeapi);

  //     const matchFilter = pokeapi.filter((pokemon) =>
  //       pokemon.name
  //         .toLowerCase()
  //         .includes(match.params.slug.toLocaleLowerCase())
  //     );

  //     setFiltered(matchFilter);
  //     console.log(matchFilter);
  //   }
  // };

  if (error) {
    return <div>Sorry, there is an error</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(pokeapi);
  console.log(filtered);

  return (
    <MainContext.Provider
      value={{
        capitalize,
        pokeapi,
        pokemonDetails,
        handleFilter,
        fetchPokemonDetails,
        filtered,
        inputSearched,
        match,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;
