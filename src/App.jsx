import "./App.css";
import { Header } from "./components/";
import { Pokemons, Pokemon } from "./containers/";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import { useContext } from "react/cjs/react.development";
// import MainContext from "./contexts";

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
      </Routes>
    </div>
  );
};

export default App;
