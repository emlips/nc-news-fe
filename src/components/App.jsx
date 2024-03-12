import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Articles from "./Articles";
import SingleArticle from "./SingleArticle";
import UserContext from "../contexts/User";

function App() {
  const [articles, setArticles] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({
    username: "happyamy2016",
    name: "Amy Happy",
    avatar_url: "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729",
  })

  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/articles"
          element={<Articles articles={articles} setArticles={setArticles} />}
        />
        <Route
          path="/:topic"
          element={<Articles articles={articles} setArticles={setArticles} />}
        />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </UserContext.Provider >
  );
}

export default App;
