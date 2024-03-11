import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Articles from "./Articles";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/articles"
          element={<Articles articles={articles} setArticles={setArticles} />}
        />
        <Route
          path="/articles/:topic"
          element={<Articles articles={articles} setArticles={setArticles} />}
        />
      </Routes>
    </>
  );
}

export default App;
