import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Articles from "./Articles";
import SingleArticle from "./SingleArticle";
import UserContext from "../contexts/User";
import ErrorPage from "./ErrorPage";
import "../stylesheets/App.css";
import "../stylesheets/MediaQueries.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [currTopic, setCurrTopic] = useState(undefined);
  const [loggedInUser, setLoggedInUser] = useState({
    username: "happyamy2016",
    name: "Amy Happy",
    avatar_url:
      "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729",
  });

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <Header setCurrTopic={setCurrTopic} />
      <Routes>
        <Route
          path="*"
          element={<ErrorPage errorMsg={"Error 404: page not found"} />}
        />
        <Route path="/" element={<Home setCurrTopic={setCurrTopic} />} />
        <Route
          path="/articles"
          element={
            <Articles
              articles={articles}
              setArticles={setArticles}
              currTopic={currTopic}
              setCurrTopic={setCurrTopic}
            />
          }
        />
        <Route
          path="articles?topic=:topic"
          element={<Articles articles={articles} setArticles={setArticles} />}
        />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
