import { useContext } from "react";
import UserContext from "../contexts/User";
import HighlightArticles from "./HighlightArticles";
import '../stylesheets/Home.css'

function Home({ setCurrTopic }) {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <h1 className="home">NC News</h1>
      <h2 className="home">Welcome back {loggedInUser.username}!</h2>
      <HighlightArticles setCurrTopic={setCurrTopic} />
    </>
  );
}

export default Home;
