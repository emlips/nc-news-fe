import { useContext } from "react";
import UserContext from "../contexts/User";
import HighlightArticles from "./HighlightArticles";

function Home() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <h1>NC News</h1>
      <h2>Welcome back {loggedInUser.username}!</h2>
      <HighlightArticles />
    </>
  );
}

export default Home;
