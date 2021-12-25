import { Favorite } from "..";
import Loader from "react-loader-spinner";
import MainContext from "../../contexts";
import Pokemon from "../Pokemon";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

const PokemonList = ({ pokemonList = [] }) => {
  const [loading, setLoading] = useState(true);

  if (useLocation().pathname === "/favorites") {
    // Duplication du loader car problème de positionnement du Hook useLocation()
    // (Il semble vouloir être en haut du composant)

    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 400);
      return (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader
            type="BallTriangle"
            color="#70a1ff"
            height={120}
            width={120}
            visible={loading}
          />
        </div>
      );
    } else {
      return <div>{<Favorite />}</div>;
    }
  }

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 400);
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader
          type="BallTriangle"
          color="#70a1ff"
          height={120}
          width={120}
          visible={loading}
        />
      </div>
    );
  }

  if (pokemonList.length < 1) {
    return <div>No Pokémon found</div>;
  }

  if (pokemonList.type === null) {
    return <div>Please select a Pokémon type</div>;
  }

  if (pokemonList[0]) {
    if (pokemonList[0].name) {
      return (
        <div>
          {pokemonList.map(({ ...pokemon }) => {
            const urlId = pokemon.url.split("/");
            const id = urlId[6];

            return <Pokemon key={id} id={id} {...pokemon}></Pokemon>;
          })}
        </div>
      );
    } else {
      return (
        <div>
          {pokemonList.map(({ ...objectPokemon }) => {
            const urlId = objectPokemon.pokemon.url.split("/");
            const id = urlId[6];

            if (id <= 151) {
              return (
                <Pokemon key={id} id={id} {...objectPokemon.pokemon}></Pokemon>
              );
            }
          })}
        </div>
      );
    }
  }

  // La même chose en ternaire

  // return loading ? (
  //   <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
  // ) : pokemonList[0] && pokemonList[0].name ? (
  //   <div>
  //     {pokemonList.map(({ ...pokemon }) => {
  //       const urlId = pokemon.url.split("/");
  //       const id = urlId[6];

  //       return <Pokemon key={id} id={id} {...pokemon}></Pokemon>;
  //     })}
  //   </div>
  // ) : pokemonList[0] && !pokemonList[0].name ? (
  //   <div>
  //     {pokemonList.map(({ ...objectPokemon }) => {
  //       const urlId = objectPokemon.pokemon.url.split("/");
  //       const id = urlId[6];

  //       if (id <= 151) {
  //         return (
  //           <Pokemon key={id} id={id} {...objectPokemon.pokemon}></Pokemon>
  //         );
  //       }
  //     })}
  //   </div>
  // ) : pokemonList.type === null ? (
  //   <div>Please select a Pokémon type</div>
  // ) : pokemonList.length < 1 ? (
  //   <div>No Pokémon found</div>
  // ) : (
  //   <div>Error</div>
  // );
};

export default PokemonList;
