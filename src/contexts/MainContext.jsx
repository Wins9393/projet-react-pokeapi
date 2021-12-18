import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MainContext = createContext({});

const Provider = ({ children }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokeapi, setPokeapi] = useState();
  const [filtered, setFiltered] = useState(pokeapi);
  const [inputSearched, setInputSearched] = useState();
  let { slug } = useParams();
  // let match = useMatch("/pokemon/:slug");

  // console.log(match);

  const fetchPokeapi = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
      );
      const data = await response.json();

      setLoading(false);
      setPokeapi(data.results);
      setFiltered(data.results);
    } catch (err) {
      setError(true);
      throw err;
    }
  };

  const handleFilter = (event) => {
    event.preventDefault();

    const inputValue = event.target[0].value;
    const pokemons = pokeapi;

    const searched = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setInputSearched(inputValue);
    console.log(slug);
    setFiltered(searched);
  };

  useEffect(() => {
    fetchPokeapi();
  }, []);

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
      value={{ pokeapi, handleFilter, filtered, inputSearched }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;
