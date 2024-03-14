import { Link } from "react-router-dom";
import "../stylesheets/Header.css";

function Header({ setCurrTopic }) {
  return (
    <nav className="header-nav">
      <Link className="header-link" to="/">
        HOME
      </Link>
      <Link
        className="header-link"
        to="/articles"
        onClick={() => setCurrTopic(undefined)}
      >
        ARTICLES
      </Link>
      <Link className="header-link">PROFILE</Link>
    </nav>
  );
}

export default Header;
