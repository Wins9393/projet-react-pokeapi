import { Avatar, Row, Col, Divider, Button } from "antd";
import { StarFilled } from "@ant-design/icons";
import "./PokemonDetails.css";
// import { useState } from "react";

const PokemonDetails = ({
  slug,
  pokemonDetails,
  capitalize,
  addToFavorites,
  isFavorite,
}) => {
  const poke = pokemonDetails.pokemon;

  console.log(poke);

  if (poke.length < 1) {
    return <div>Error !</div>;
  } else {
    return (
      <>
        <div className="pokemonNameContainer">
          <div className="pokemonNameBorder">
            <div className="pokemonNameBorder2">
              <div className="pokemonNameWrapper">
                <img
                  src="https://cutewallpaper.org/24/pokeball-png/pokemon-pokeball-png-photo-png-all.png"
                  alt="pokeball"
                  width={48}
                  height={48}
                />
                <h1>
                  <Avatar
                    src={poke.sprites.front_default}
                    alt={slug}
                    size={64}
                  />
                  N° {poke.id} {capitalize(poke.name)}
                </h1>
                <Button
                  type="text"
                  shape="circle"
                  size="large"
                  icon={<StarFilled id="star" />}
                  onClick={() => addToFavorites(poke)}
                />
                {/* Test pour toggle l'étoile au click
                    Mais le toggle changeait le state de tous les pokémons

                  <div onClick={() => addToFavorites(poke)}>
                  {isFavorite ? (
                    <StarFilled id="star" />
                  ) : (
                    <StarOutlined id="star" />
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="pokemonContainer">
          <div className="pokemonRowWrapper">
            <Row gutter={[16, 8]} justify="center" align="middle">
              <Divider className="divider">
                <p>General</p>
              </Divider>

              <Col span={8}>
                <div className="imgContainer">
                  <div className="imgWrapper">
                    <Avatar
                      src={poke.sprites.front_default}
                      alt={slug}
                      size={250}
                    />
                  </div>
                </div>
              </Col>
              <Col className="container containerColumn" span={4}>
                <div className="container containerColor">
                  <h3 className="subTitleWhite">Type</h3>
                </div>
                <div className="container containerColor">
                  <h3 className="subTitleWhite">Height</h3>
                </div>
                <div className="container containerColor">
                  <h3 className="subTitleWhite">Weight</h3>
                </div>
              </Col>
              <Col span={4}>
                <div className="mb8">
                  <p className={`${poke.types[0].type.name} type`}>
                    {capitalize(poke.types[0].type.name)}
                  </p>
                </div>
                <div className="mb8 height">
                  <p>{poke.height * 10} cm</p>
                </div>
                <div className="mb8 weight">
                  <p>{poke.weight / 10} kg</p>
                </div>
              </Col>

              <Col span={8}>
                <div className="container containerColumn containerMoves">
                  <div className="container containerColor">
                    <h3 className="subTitleWhite">Moves</h3>
                  </div>
                  <div className="movesWrapper">
                    <p>{capitalize(poke.moves[0].move.name)}</p>
                    <p>{capitalize(poke.moves[1].move.name)}</p>
                    <p>{capitalize(poke.moves[2].move.name)}</p>
                  </div>
                </div>
              </Col>
              <Divider className="divider">
                <p>Statistics</p>
              </Divider>

              <Col span={3}>
                <div className="container">
                  <h3 className="subTitle">HP:</h3>
                </div>
                <div className="container">
                  <h3 className="subTitle">Attack:</h3>
                </div>
                <div className="container">
                  <h3 className="subTitle">Defense:</h3>
                </div>
              </Col>
              <Col span={4}>
                <div className="container">
                  <p>{poke.stats[0].base_stat}</p>
                </div>
                <div className="container">
                  <p>{poke.stats[1].base_stat}</p>
                </div>
                <div className="container">
                  <p>{poke.stats[2].base_stat}</p>
                </div>
              </Col>
              <Col span={4}>
                <div className="container">
                  <h3 className="subTitle">Special Attack:</h3>
                </div>
                <div className="container">
                  <h3 className="subTitle">Special Defence:</h3>
                </div>
                <div className="container">
                  <h3 className="subTitle">Speed:</h3>
                </div>
              </Col>
              <Col span={4}>
                <div className="container">
                  <p>{poke.stats[3].base_stat}</p>
                </div>
                <div className="container">
                  <p>{poke.stats[4].base_stat}</p>
                </div>
                <div className="container">
                  <p>{poke.stats[5].base_stat}</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
};

export default PokemonDetails;
