import "./App.css";
import Header from "./components/Header";
import Pokemons from "./containers/Pokemons/";
import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Pokemons />
        <Routes>
          <Route path="/" element={<Pokemons />} />
          {/* <Route path="/pokemon" element={<About />} /> */}
        </Routes>
      </div>
    );
  }
}

export default App;
