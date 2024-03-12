import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TopicsNav from "./TopicsNav";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import ".././stylesheets/ArticleCard.css";
import ".././stylesheets/Articles.css";

function Articles({ articles, setArticles }) {
  const [currTopic, setCurrTopic] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  const fetchArticles = () => {
    setIsLoading(true);
    let arg = undefined;
    if (topic) {
      arg = topic;
    }
    getArticles(arg)
    .then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchArticles();
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
