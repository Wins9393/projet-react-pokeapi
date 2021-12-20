import { Avatar, Row, Col, Divider } from "antd";
import "./PokemonDetails.css";

const PokemonDetails = ({ slug, pokemonDetails, capitalize }) => {
  console.log(pokemonDetails.pokemon);
  if (pokemonDetails.pokemon.length > 0) {
    return (
      <>
        <div className="pokemonNameContainer">
          <div className="pokemonNameBorder">
            <div className="pokemonNameBorder2">
              <div className="pokemonNameWrapper">
                <img src="./public/pokeball.png" />
                <h1>
                  <Avatar
                    src={pokemonDetails.sprites.front_default}
                    alt={slug}
                    size={64}
                  />
                  N° {pokemonDetails.id} {capitalize(pokemonDetails.name)}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="pokemonContainer">
          <div className="pokemonRowWrapper">
            <Row gutter={[8, 8]} justify="center" align="middle">
              <Divider className="divider">
                <p>General</p>
              </Divider>

              <Col span={8}>
                <div className="imgContainer">
                  <div className="imgWrapper">
                    <Avatar
                      src={pokemonDetails.sprites.front_default}
                      alt={slug}
                      size={250}
                    />
                  </div>
                </div>
              </Col>
              <Col className="container containerColumn" span={4}>
                <div className="container containerColor">
                  <h3 className="subTitleWhite">Type:</h3>
                </div>
                <div className="container containerColor">
                  <h3 className="subTitleWhite">Height:</h3>
                </div>
                <div className="container containerColor">
                  <h3 className="subTitleWhite">Weight:</h3>
                </div>
              </Col>
              <Col span={2}>
                <div className="mb8">
                  <p className={pokemonDetails.types[0].type.name}>
                    {capitalize(pokemonDetails.types[0].type.name)}
                  </p>
                </div>
                <div className="mb8">
                  <p>{pokemonDetails.height * 10} cm</p>
                </div>
                <div className="mb8">
                  <p>{pokemonDetails.weight / 10} kg</p>
                </div>
              </Col>

              <Col span={8}>
                <h3>Moves</h3>
                <p>{capitalize(pokemonDetails.moves[0].move.name)}</p>
                <p>{capitalize(pokemonDetails.moves[1].move.name)}</p>
                <p>{capitalize(pokemonDetails.moves[2].move.name)}</p>
              </Col>
              <Divider className="divider">
                <p>Statistics</p>
              </Divider>

              <Col span={4}>
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
                  <p>{pokemonDetails.stats[0].base_stat}</p>
                </div>
                <div className="container">
                  <p>{pokemonDetails.stats[1].base_stat}</p>
                </div>
                <div className="container">
                  <p>{pokemonDetails.stats[2].base_stat}</p>
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
                  <p>{pokemonDetails.stats[3].base_stat}</p>
                </div>
                <div className="container">
                  <p>{pokemonDetails.stats[4].base_stat}</p>
                </div>
                <div className="container">
                  <p>{pokemonDetails.stats[5].base_stat}</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  } else {
    return <div>ERROR</div>;
  }
};

export default PokemonDetails;
