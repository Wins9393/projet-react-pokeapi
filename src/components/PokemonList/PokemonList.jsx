import Pokemon from "../Pokemon";
import { Favorite } from "..";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const PokemonList = ({ pokemonList = [] }) => {
  const [favorites] = useState({ ...localStorage });
  console.log(favorites);
  console.log(pokemonList);
  console.log(useLocation().pathname);

  if (useLocation().pathname === "/favorites") {
    return <div>{<Favorite />}</div>;
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
};

export default PokemonList;
