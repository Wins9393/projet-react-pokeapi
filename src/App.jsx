import "./App.css";
import { Header as HeaderPerso } from "./components/";
import { Pokemons, Pokemon, PokemonsByType, Favorites } from "./containers/";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
const { Header, Sider, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <div className="App">
        <Header className="header">
          <HeaderPerso />
        </Header>
        <Layout>
          <Sider className="sider"></Sider>
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
};

export default App;
