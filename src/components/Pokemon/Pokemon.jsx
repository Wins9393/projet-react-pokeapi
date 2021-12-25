import { Link } from "react-router-dom";
import "./Pokemon.css";
import Avatar from "antd/lib/avatar/avatar";
import { useContext } from "react/cjs/react.development";
import MainContext from "../../contexts";

const Pokemon = ({ id, name }) => {
  const { capitalize } = useContext(MainContext);

  if (id) {
    return (
      <>
        <div className="pokemonNameContainer hover">
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
                  <Avatar
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt={name}
                    size={64}
                  />
                  <h2 className="pokeTitle">N° {id}</h2>
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
      </>
    );
  }
};

export default Pokemon;
