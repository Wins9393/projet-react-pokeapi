import "./App.css";
import Header from "./components/Header";
import Pokemons from "./containers/Pokemons";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Pokemons />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/pokemon" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
