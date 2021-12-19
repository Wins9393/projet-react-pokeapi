import { Link } from "react-router-dom";
import "./Pokemon.css";

const Pokemon = ({ id, name, url }) => {
  return (
    <Link to={`/pokemon/${name}`}>
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={`Pokémon avec l'id:${id}`}
        />
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default Pokemon;
