import "./App.css";
import { Header as HeaderPerso } from "./components/";
import {
  Pokemons,
  Pokemon,
  PokemonsByType,
  Favorites,
  PreviewPokemonSider,
} from "./containers/";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import { useContext } from "react/cjs/react.development";
import MainContext from "./contexts";

const { Header, Sider, Content } = Layout;

const App = () => {
  const { pokeapi, hasSider } = useContext(MainContext);
  if (hasSider) {
    return (
      <Layout>
        <div className="App">
          <Header className="header">
            <HeaderPerso />
          </Header>
          <Layout>
            <Sider className="sider">
              <PreviewPokemonSider poke={pokeapi} />
            </Sider>
            <Content className="content">
              <Routes>
                <Route path="/" element={<Pokemons />} />
                <Route path="/filter/:slug" element={<Pokemons />} />
                <Route path="/pokemon/:slug" element={<Pokemon />} />
                <Route path="/type" element={<PokemonsByType />} />
                <Route path="/favorites" element={<Favorites />} />
              </Routes>
            </Content>
          </Layout>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="App">
          <Header className="header">
            <HeaderPerso />
          </Header>
          <Layout>
            <Content className="content">
              <Routes>
                <Route path="/" element={<Pokemons />} />
                <Route path="/filter/:slug" element={<Pokemons />} />
                <Route path="/pokemon/:slug" element={<Pokemon />} />
                <Route path="/type" element={<PokemonsByType />} />
                <Route path="/favorites" element={<Favorites />} />
              </Routes>
            </Content>
          </Layout>
        </div>
      </Layout>
    );
  }
};

export default App;
