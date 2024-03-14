import { useEffect, useState } from "react";
import { getArticles } from "../api";
import HighlightArticleCard from "./HighlightArticleCard";
import ".././stylesheets/HighlightArticles.css";
import ".././stylesheets/HighlightArticleCard.css";

function HighlightArticles({ setCurrTopic }) {
  const [recentArticles, setRecentArticles] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRecentArticles = () => {
    setIsLoading(true)
    getArticles(undefined, "created_at", "desc", 1).then((articlesFromApi) => {
      setRecentArticles(articlesFromApi);
    });
  };

  const fetchPopularArticles = () => {
    getArticles(undefined, "votes", "desc", 1).then((articlesFromApi) => {
      setIsLoading(false)
      setPopularArticles(articlesFromApi);
    });
  };

  useEffect(() => {
    fetchRecentArticles();
    fetchPopularArticles();
  }, []);

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <h1 className="highlight-title">Recent articles:</h1>
      <div className="highlight-articles">
        {recentArticles.splice(0, 4).map((article) => {
          return (
            <HighlightArticleCard
              key={article.article_id}
              article={article}
              setCurrTopic={setCurrTopic}
            />
          );
        })}
      </div>
      <h1 className="highlight-title">Most popular:</h1>
      <div className="highlight-articles">
        {popularArticles.splice(0, 4).map((article) => {
          return (
            <HighlightArticleCard
              key={article.article_id}
              article={article}
              setCurrTopic={setCurrTopic}
            />
          );
        })}
      </div>
    </>
  );
}

export default HighlightArticles;
