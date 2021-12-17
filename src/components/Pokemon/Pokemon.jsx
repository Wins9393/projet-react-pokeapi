import { Link } from "react-router-dom";
import "./Pokemon.css";

const Pokemon = ({ ...pokemon }) => (
  // <Link to={`/pokemon/${id}`}>
  <div>
    <h3>{pokemon.name}</h3>
    <p>{pokemon.url}</p>
  </div>
  // </Link>
);

export default Pokemon;
