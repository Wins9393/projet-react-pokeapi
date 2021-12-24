import { createContext, useState, useEffect } from "react";
import { useMatch } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainContext = createContext({});

const Provider = ({ children }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokeapi, setPokeapi] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({
    pokemon: [],
    isFetching: false,
  });
  const [filtered, setFiltered] = useState([]);
  const [filteredByType, setFilteredByType] = useState([]);
  const [inputSearched, setInputSearched] = useState();
  const [isFavorite, setIsFavorite] = useState();

  // const [favorites, setFavorites] = useState({ ...localStorage })

  let match = useMatch("/filter/:slug");

  useEffect(() => {
    fetchPokeapi();
  }, []);

  // console.log(pokeapi);

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

  const fetchPokemonDetails = async (name, active) => {
    try {
      setPokemonDetails({ pokemon: pokemonDetails.pokemon, isFetching: true });
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      if (active) {
        setPokemonDetails({ pokemon: data, isFetching: false });
        console.log(pokemonDetails.pokemon);
      }
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

  const onSearch = (value) => {
    const searched = pokeapi.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value)
    );
    setFiltered(searched);
  };

  const handleFilterByType = async (type) => {
    if (!type) {
      setFilteredByType({ type: null });
      return;
    }
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await response.json();

      setFilteredByType(data.pokemon);
      // const tmp = [];

      // filteredByType.map((object) => tmp.push(object.pokemon));
      // setFilteredByType(tmp);
    } catch (err) {
      throw err;
    }

    console.log(filteredByType);
  };

  const addToFavorites = (poke) => {
    if (localStorage.getItem(poke.name)) {
      localStorage.removeItem(poke.name);
      setIsFavorite(false);
      toast.error(`${poke.name} has been removed from the favorites !`);
    } else {
      localStorage.setItem(poke.name, poke.sprites.front_default);
      setIsFavorite(true);
      toast.success(`${poke.name} has been added to the favorites !`);
    }
  };

  // const toggleFavorite = (storage) => {
  //   if (localStorage.getItem(poke.name)) {
  //     setIsFavorite(true);
  //   } else {
  //     setIsFavorite(false);
  //   }
  // };

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
  // console.log(pokeapi);
  // console.log(filtered);
  // console.log(filteredByType);

  return (
    <MainContext.Provider
      value={{
        capitalize,
        isFavorite,
        pokeapi,
        pokemonDetails,
        handleFilter,
        handleFilterByType,
        fetchPokemonDetails,
        filtered,
        filteredByType,
        inputSearched,
        match,
        onSearch,
        addToFavorites,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;
