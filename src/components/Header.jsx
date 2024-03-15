import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/User";
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import "../stylesheets/Header.css";

function Header({ setCurrTopic }) {
  const { loggedInUser } = useContext(UserContext);
  return (
    <nav className="header-nav">
      <Link className="header-link" to="/">
        <HomeIcon /> <p>HOME</p>
      </Link>
      <Link
        className="header-link"
        to="/articles"
        onClick={() => setCurrTopic(undefined)}
      >
        <NewspaperIcon />
        <p>ARTICLES</p>
      </Link>
      {loggedInUser ? (
        <Link className="header-link" to={`/profile/${loggedInUser.username}`}>
          <AccountBoxIcon />
          <p>PROFILE</p>
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
