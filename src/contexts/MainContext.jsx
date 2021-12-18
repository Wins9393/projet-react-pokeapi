import { createContext, useState, useEffect } from "react";
import { useParams, useMatch, Link } from "react-router-dom";

const MainContext = createContext({});

const Provider = ({ children }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokeapi, setPokeapi] = useState();
  const [filtered, setFiltered] = useState(pokeapi);
  const [inputSearched, setInputSearched] = useState();
  // let { slug } = useParams();
  let match = useMatch("/filter/:slug");

  // console.log(match.params.slug);
  // console.log(filtered);

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
      matchParamsWithInput();
    } catch (err) {
      setError(true);
      throw err;
    }
  };

  const handleFilter = (event) => {
    event.preventDefault();

    const inputValue = event.target[0].value;
    // const pokemons = pokeapi;

    const searched = pokeapi.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setInputSearched(inputValue);
    setFiltered(searched);
  };

  const matchParamsWithInput = async () => {
    if (match) {
      console.log(pokeapi);

      const matchFilter = await pokeapi.filter((pokemon) =>
        pokemon.name
          .toLowerCase()
          .includes(match.params.slug.toLocaleLowerCase())
      );

      setFiltered(matchFilter);
      console.log(matchFilter);
    }
  };

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
        pokeapi,
        handleFilter,
        filtered,
        inputSearched,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;
