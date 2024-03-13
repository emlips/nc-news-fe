import { useEffect, useState } from "react";
import { getArticles } from "../api";
import HighlightArticleCard from "./HighlightArticleCard";
import '.././stylesheets/HighlightArticles.css'
import '.././stylesheets/HighlightArticleCard.css'

function HighlightArticles() {
  const [recentArticles, setRecentArticles] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);

  const fetchRecentArticles = () => {
    getArticles(undefined, "created_at", "desc", 1).then((articlesFromApi) => {
      setRecentArticles(articlesFromApi);
    });
  };

  const fetchPopularArticles = () => {
    getArticles(undefined, "votes", "desc", 1).then((articlesFromApi) => {
      setPopularArticles(articlesFromApi);
    });
  };

  useEffect(() => {
    fetchRecentArticles();
    fetchPopularArticles();
  }, []);

  return (
    <>
      <h1>Latest:</h1>
      <div className="highlight-articles">
        {recentArticles.splice(0, 4).map((article) => {
          return (
            <HighlightArticleCard key={article.article_id} article={article} />
          );
        })}
      </div>
      <h1>Popular:</h1>
      <div className="highlight-articles">
        {popularArticles.splice(0, 4).map((article) => {
          return (
            <HighlightArticleCard key={article.article_id} article={article} />
          );
        })}
      </div>
    </>
  );
}

export default HighlightArticles;
