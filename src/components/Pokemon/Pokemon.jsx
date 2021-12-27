import { Link } from "react-router-dom";
import "./Pokemon.css";
import Avatar from "antd/lib/avatar/avatar";
import { useContext, useState } from "react/cjs/react.development";
import MainContext from "../../contexts";

const Pokemon = ({ id, name }) => {
  const { capitalize, handleIdChange } = useContext(MainContext);
  const [mouseEnter, setMouseEnter] = useState(false);

  if (mouseEnter) {
    handleIdChange(id);
  }

  if (id) {
    return (
      <>
        <div className="pokemonNameContainer">
          <Link
            to={`/pokemon/${name}`}
            onMouseEnter={() => setMouseEnter(true)}
            onMouseOver={() => setMouseEnter(false)}
          >
            <div className="pokemonNameBorder hover">
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
