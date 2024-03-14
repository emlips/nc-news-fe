import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/User";
import "../stylesheets/Header.css";

function Header({ setCurrTopic }) {
  const { loggedInUser } = useContext(UserContext);
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
      {loggedInUser ? (
        <Link className="header-link" to={`/profile/${loggedInUser.username}`}>
          PROFILE
        </Link>
      ) : (
        <Link className="header-link" to="/login">
          LOGIN
        </Link>
      )}
    </nav>
  );
}

export default Header;
