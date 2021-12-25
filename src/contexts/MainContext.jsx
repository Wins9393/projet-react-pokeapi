import { createContext, useState, useEffect } from "react";
import { useMatch } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const MainContext = createContext({});

const Provider = ({ children }) => {
  const [error, setError] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [inputSearched, setInputSearched] = useState();
  const [isFavorite, setIsFavorite] = useState();
  const [loading, setLoading] = useState(true);
  const [pokeapi, setPokeapi] = useState([]);

  let match = useMatch("/filter/:slug");

  useEffect(() => {
    fetchPokeapi();
    // if (loading) {
    //   setTimeout(() => {
    //     setLoading(false);
    //   }, 1000);
    // }
  }, []);

  const fetchPokeapi = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
      );
      const data = await response.json();

      setPokeapi(data.results);
      setFiltered(data.results);

      if (loading) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }

      // Tentative de synchroniser l'url avec le input
      // matchParamsWithInput();
    } catch (err) {
      setError(true);
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

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader
          type="BallTriangle"
          color="#fbc531"
          height={120}
          width={120}
          visible={loading}
        />
      </div>
    );
  }

  if (error) {
    return <div>Sorry, there is an error</div>;
  }

  return (
    <MainContext.Provider
      value={{
        capitalize,
        isFavorite,
        pokeapi,
        handleFilter,
        filtered,
        inputSearched,
        match,
        onSearch,
        addToFavorites,
        loading,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;
