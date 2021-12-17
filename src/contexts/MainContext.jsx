import { createContext, useState, useEffect } from "react";

const MainContext = createContext({});

const Provider = ({ children }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokeapi, setPokeapi] = useState();

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

  useEffect(() => {
    fetchPokeapi();
  }, []);

  if (error) {
    return <div>ERROR</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  // console.log(pokeapi);

  return (
    <MainContext.Provider value={{ pokeapi, fetchPokeapi }}>
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;
