// import { Link } from "react-router-dom";
import "./Pokemon.css";

const Pokemon = ({ id, name, url }) => {
  return (
    // <Link to={`/pokemon/${id}`}>
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={`Image du Pokémon avec l'id:${id}`}
      />
      <h3>{name}</h3>
      <p>{url}</p>
    </div>
    // </Link>
  );
};

export default Pokemon;
