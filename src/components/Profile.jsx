import { useContext } from "react";
import UserContext from "../contexts/User";
import { Link } from "react-router-dom";
import '../stylesheets/Profile.css'
import HighlightArticles from "./HighlightArticles";

function Profile({ setLoggedInUser }) {
  const { loggedInUser } = useContext(UserContext);

  const handleClick = () => {
    setLoggedInUser(undefined);
  };

  return (
    <>
    <div className="profile" id="profile-media">
      <h1 id="profile-header">Hello, {loggedInUser.username}!</h1>
      <img id="profile-image" src={loggedInUser.avatar_url} alt={`${loggedInUser.username} profile picture`}></img>
      <Link to="/" id="logout-link">
        <button id="logout-button" onClick={handleClick}>Log out</button>
      </Link>
    </div>
    <h2>Suggested Articles:</h2>
    <HighlightArticles />
    </>
  );
}

export default Profile;
