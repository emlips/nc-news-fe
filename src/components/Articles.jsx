import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TopicsNav from "./TopicsNav";
import ArticleCard from "./ArticleCard";
import ".././stylesheets/ArticleCard.css";
import ".././stylesheets/Articles.css";

function Articles({ articles, setArticles }) {
  const [currTopic, setCurrTopic] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  const getArticles = () => {
    setIsLoading(true);
    let queryStr = "https://nc-news-1d1v.onrender.com/api/articles";
    if (topic) {
      queryStr += `?topic=${topic}`;
    }
    return axios.get(queryStr).then(({ data }) => {
      setArticles(data.articles);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getArticles();
  }, [currTopic]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <TopicsNav setCurrTopic={setCurrTopic} />
      {topic ? (
        <h1 id="topic-heading">
          {topic[0].toUpperCase() + topic.slice(1).toLowerCase()}
        </h1>
      ) : (
        <h1 id="topic-heading">All</h1>
      )}
      {articles.length > 0 ? (
        <div className="articles">
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </div>
      ) : (
        <h2>No articles to show...</h2>
      )}
    </>
  );
}

export default Articles;
