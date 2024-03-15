import { useEffect, useState } from "react";
import { getArticles } from "../api";
import HighlightArticleCard from "./HighlightArticleCard";
import ".././stylesheets/HighlightArticles.css";
import ".././stylesheets/HighlightArticleCard.css";

function HighlightBanner({ setCurrTopic, article_id}) {
  const [recentArticles, setRecentArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchArticles = () => {
    setIsLoading(true);
    getArticles(undefined, "created_at", "desc", 1).then((articlesFromApi) => {
      setRecentArticles(articlesFromApi);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchArticles();
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="highlight-block">
      <div className="highlight-articles">
        <h1 className="highlight-title">Recent articles:</h1>
        {recentArticles.map((article) => {
          return (
            <HighlightArticleCard
              key={article.article_id}
              article={article}
              setCurrTopic={setCurrTopic}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HighlightBanner;
