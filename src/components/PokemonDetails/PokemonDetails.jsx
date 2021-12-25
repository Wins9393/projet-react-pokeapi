import { Avatar, Row, Col, Divider, Button } from "antd";
import { StarFilled } from "@ant-design/icons";
import { ToastContainer } from "react-toastify";
import Loader from "react-loader-spinner";

import "./PokemonDetails.css";

// import { useState } from "react";

const PokemonDetails = ({
  slug,
  pokemonDetails,
  capitalize,
  addToFavorites,
  isFavorite,
  loading,
}) => {
  const poke = pokemonDetails.pokemon;

  console.log(poke);

  if (loading) {
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
  } else if (poke.length < 1) {
    return <div>Error !</div>;
  } else {
    return (
      <>
        <div className="pokemonNameContainer">
          <ToastContainer position="top-center" />
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
            <Row gutter={[32, 32]} justify="center" align="middle">
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
              <Col span={4} className="container typeHeightWeightColumn">
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
              <Col span={4} className="container typeHeightWeightValueColumn">
                {poke.types[1] ? (
                  <div className="mb8 twoTypes">
                    <p className={`${poke.types[0].type.name} type`}>
                      {capitalize(poke.types[0].type.name)}
                    </p>
                    <p className={`${poke.types[1].type.name} type`}>
                      {capitalize(poke.types[1].type.name)}
                    </p>
                  </div>
                ) : (
                  <div className="mb8 oneType">
                    <p className={`${poke.types[0].type.name} type`}>
                      {capitalize(poke.types[0].type.name)}
                    </p>
                  </div>
                )}

                <div className="mb8 height">
                  <p>{poke.height * 10} cm</p>
                </div>
                <div className="mb8 weight">
                  <p>{poke.weight / 10} kg</p>
                </div>
              </Col>

              <Col span={8}>
                <div className="container containerMoves">
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

              <Col span={4} className="stats">
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
              <Col span={4} className="stats">
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
              <Col span={4} className="stats">
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
              <Col span={4} className="stats">
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
