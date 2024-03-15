import { useEffect, useState } from "react";
import { getUsers } from "../api";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/Login.css";

function Login({ setLoggedInUser }) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = () => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  };

  const changeUser = (user) => {
    setLoggedInUser(user)
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="login" id="login-media">
      <h1 id="login-title">Hello! Please select a user to login:</h1>
      <div id="user-cards">{users.map((user) => {
        return (
          <Link
            to={`/profile/${user.username}`}
            onClick={() => changeUser(user)}
            key={user.username}
            className="user-login-link"
          >
            <div className="user-card">
              <img src={user.avatar_url} alt={`${user.username} profile picture`}></img>
              <p>{user.username}</p>
            </div>
          </Link>
        );
      })}
      </div>
    </div>
  );
}

export default Login;
