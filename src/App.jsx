import "./App.css";
import { Header } from "./components/";
import { Pokemons } from "./containers/";
import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/filter/:slug" element={<Pokemons />} />
          {/* <Link to={`/pokemon/${slug}`}></Link> */}
        </Routes>
      </div>
    );
  }
}

export default App;
