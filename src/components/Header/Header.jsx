import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="App__Header">
    <nav>
      <ul>
        <li>
          <Link to="/">All Pokemon</Link>
        </li>
        <li>
          <Link to="/type">By Type</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
