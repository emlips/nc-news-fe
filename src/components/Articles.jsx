import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TopicsNav from "./TopicsNav";
import ArticleCard from "./ArticleCard";
import SortArticles from "./SortArticles";
import { getArticles } from "../api";
import ".././stylesheets/ArticleCard.css";
import ".././stylesheets/Articles.css";

function Articles({ articles, setArticles }) {
  const [currTopic, setCurrTopic] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams()
  const { topic } = useParams();

  const fetchArticles = () => {
    setIsLoading(true);
    let topicArg = undefined;
    if (topic) {
      topicArg = topic;
    }
    getArticles(topicArg, sortBy, order).then((articles) => {
      const queryStr = `sort_by=${sortBy}&order=${order}`
      setArticles(articles);
      setIsLoading(false);
      setSearchParams(queryStr)
    });
  };

  useEffect(() => {
    fetchArticles();
  }, [currTopic, sortBy, order]);

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
      <SortArticles setSortBy={setSortBy} sortBy={sortBy} setOrder={setOrder} order={order}/>
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
