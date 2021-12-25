import { Link } from "react-router-dom";
import { Menu } from "antd";
import "./Header.css";

const Header = () => {
  return (
    <Menu mode="horizontal" className="header">
      <Menu.Item key="all pokemon">
        <Link to="/">All Pokemons</Link>
      </Menu.Item>
      <Menu.Item key="by type">
        <Link to="/type">By Type</Link>
      </Menu.Item>
      <Menu.Item key="favorites">
        <Link to="/favorites">Favorites</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
