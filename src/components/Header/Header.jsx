import { Link } from "react-router-dom";
import { Menu } from "antd";
import "./Header.css";

const Header = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="all pokemon">
        <Link to="/">All Pokemon</Link>
      </Menu.Item>
      <Menu.Item key="by type">
        <Link to="/type">By Type</Link>
      </Menu.Item>
      <Menu.Item key="favorites">
        <Link to="/favorites">Favorites</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
