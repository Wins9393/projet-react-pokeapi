import { createContext, useState, useEffect } from "react";

const MainContext = createContext({});

const Provider = ({ children }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokeapi, setPokeapi] = useState();
  const [filtered, setFiltered] = useState(pokeapi);

  const fetchPokeapi = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
      );
      const data = await response.json();

      setLoading(false);
      setPokeapi(data.results);
    } catch (err) {
      setError(true);
      throw err;
    }
  };

  const handleFilter = (event) => {
    event.preventDefault();

    const inputValue = event.target[0].value;
    const pokemons = pokeapi;

    const searched = pokeapi.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFiltered(searched);
  };

  useEffect(() => {
    fetchPokeapi();
  }, []);

  if (error) {
    return <div>ERROR</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(pokeapi);
  console.log(filtered);

  return (
    <MainContext.Provider value={{ pokeapi, handleFilter, filtered }}>
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;
