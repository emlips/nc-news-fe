import { useContext } from "react";
import UserContext from "../contexts/User";
import { Link } from "react-router-dom";
import '../stylesheets/Profile.css'

function Profile({ setLoggedInUser }) {
  const { loggedInUser } = useContext(UserContext);

  const handleClick = () => {
    setLoggedInUser(undefined);
  };

  return (
    <div className="profile">
      <h1>Hello, {loggedInUser.username}!</h1>
      <img src={loggedInUser.avatar_url} alt={loggedInUser.username}></img>
      <Link to="/" id="logout-link">
        <button onClick={handleClick}>Log out</button>
      </Link>
    </div>
  );
}

export default Profile;
