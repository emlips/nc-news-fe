import { useContext } from "react";
import UserContext from "../contexts/User";
import { Link } from "react-router-dom";

function Profile({ setLoggedInUser }) {
  const { loggedInUser } = useContext(UserContext);

  const handleClick = () => {
    setLoggedInUser(undefined);
  };

  return (
    <>
      <h1>Hello, {loggedInUser.username}!</h1>
      <img src={loggedInUser.avatar_url} alt={loggedInUser.username}></img>
      <Link to="/">
        <button onClick={handleClick}>Log out</button>
      </Link>
    </>
  );
}

export default Profile;
