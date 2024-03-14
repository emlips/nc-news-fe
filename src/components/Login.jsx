import { useEffect, useState } from "react";
import { getUsers } from "../api";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Login.css";

function Login({ setLoggedInUser }) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = () => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  };

  const loginUser = (selectedUsername) => {
    const user = users.filter((user) => user.username === selectedUsername)[0];
    setLoggedInUser(user);
    navigate(`/profile/${user.username}`);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="login" id="login-media">
      <h1 id="login-title">Hello! Please select a user to login:</h1>
      <form id="login-form">
        <label htmlFor="users"></label>
        <select id="users" onChange={(e) => loginUser(e.target.value)}>
          <option></option>
          {users.map((user) => {
            return (
              <option value={user.username} key={user.username}>
                {user.username}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}

export default Login;
