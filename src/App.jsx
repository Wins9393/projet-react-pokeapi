import "./App.css";
import { Header } from "./components/";
import { Pokemons, Pokemon, PokemonsByType, Favorites } from "./containers/";
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  // Tentative de synchroniser l'url avec le input
  // const { match } = useContext(MainContext);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/filter/:slug" element={<Pokemons />} />
        <Route path="/pokemon/:slug" element={<Pokemon />} />
        <Route path="/type" element={<PokemonsByType />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
