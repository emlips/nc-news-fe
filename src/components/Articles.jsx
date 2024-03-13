import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TopicsNav from "./TopicsNav";
import ArticleCard from "./ArticleCard";
import SortArticles from "./SortArticles";
import { getArticles, getArticlesCount } from "../api";
import ".././stylesheets/ArticleCard.css";
import ".././stylesheets/Articles.css";
import ErrorPage from "./ErrorPage";

function Articles({ articles, setArticles }) {
  const [error, setError] = useState(null);
  const [currTopic, setCurrTopic] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [articlesPage, setArticlesPage] = useState(1);
  const [articlesCount, setArticlesCount] = useState(0);
  const { topic } = useParams();

  const fetchArticles = () => {
    setIsLoading(true);
    let topicArg = undefined;
    if (topic) {
      topicArg = topic;
    }
    getArticles(topicArg, sortBy, order, articlesPage)
      .then((articles) => {
        const queryStr = `topic=${
          topic || "all"
        }&sort_by=${sortBy}&order=${order}`;
        setArticles(articles);
        setIsLoading(false);
        setSearchParams(queryStr);
      })
      .catch((err) => {
        setError({ err });
      });
    getArticlesCount(topicArg).then((articlesCountFromApi) => {
      setArticlesCount(articlesCountFromApi);
    });
  };

  useEffect(() => {
    fetchArticles();
  }, [currTopic, sortBy, order, articlesPage]);

  if (error) {
    return <ErrorPage />;
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <TopicsNav
        setCurrTopic={setCurrTopic}
        setArticlesPage={setArticlesPage}
        setSortBy={setSortBy}
        setOrder={setOrder}
      />
      {topic ? (
        <h1 id="topic-heading">
          {topic[0].toUpperCase() + topic.slice(1).toLowerCase()}
        </h1>
      ) : (
        <h1 id="topic-heading">All</h1>
      )}
      <SortArticles
        setSortBy={setSortBy}
        sortBy={sortBy}
        setOrder={setOrder}
        order={order}
        setArticlesPage={setArticlesPage}
      />
      <p>
        Viewing page {articlesPage} of {Math.ceil(articlesCount / 10)}
      </p>
      <button
        onClick={() => setArticlesPage(articlesPage - 1)}
        disabled={articlesPage === 1 ? true : false}
      >
        Previous Page
      </button>
      <button
        onClick={() => setArticlesPage(articlesPage + 1)}
        disabled={articlesPage === Math.ceil(articlesCount / 10) ? true : false}
      >
        Next Page
      </button>
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
