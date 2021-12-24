import { Link } from "react-router-dom";

const Favorite = () => {
  let favoritesPokemons = [];

  for (let name in localStorage) {
    favoritesPokemons.push(
      <Link to={`/pokemon/${name}`} key={name}>
        <div>
          <img src={localStorage.getItem(name)} alt={name} />
          <h3>{name}</h3>
        </div>
      </Link>
    );
  }
  favoritesPokemons.splice(-6, 6);
  console.log(favoritesPokemons);
  return favoritesPokemons;
};
export default Favorite;
