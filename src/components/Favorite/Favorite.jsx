import { Link } from "react-router-dom";
import Avatar from "antd/lib/avatar/avatar";
import { useContext } from "react/cjs/react.development";
import MainContext from "../../contexts";

const Favorite = () => {
  const { capitalize } = useContext(MainContext);
  let favoritesPokemons = [];

  for (let name in localStorage) {
    favoritesPokemons.push(
      <div className="pokemonNameContainer" key={name}>
        <Link to={`/pokemon/${name}`}>
          <div className="pokemonNameBorder">
            <div className="pokemonNameBorder2">
              <div className="pokemonNameWrapper">
                <img
                  src="https://cutewallpaper.org/24/pokeball-png/pokemon-pokeball-png-photo-png-all.png"
                  alt="pokeball"
                  width={48}
                  height={48}
                />
                <Avatar src={localStorage.getItem(name)} alt={name} size={64} />
                <h2 className="pokeTitle">N° </h2>
                <h2 className="pokeTitle">{capitalize(name)}</h2>
                {/* Petite triche pour bien positionner mes éléments */}
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
  favoritesPokemons.splice(-6, 6);
  return favoritesPokemons;
};
export default Favorite;
