import { useEffect, useState } from "react";
import { getUsers } from "../api";
import { useNavigate } from "react-router-dom";

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
    <form>
      <label htmlFor="users">Select user:</label>
      <select id="users" onChange={(e) => loginUser(e.target.value)}>
        {users.map((user) => {
          return (
            <option value={user.username} key={user.username}>
              {user.username}
            </option>
          );
        })}
      </select>
    </form>
  );
}

export default Login;
