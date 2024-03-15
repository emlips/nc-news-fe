import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleArticleCard from "./SingleArticleCard";
import Comments from "./Comments";
import HighlightArticles from "./HighlightArticles";
import { getSingleArticle } from "../api";
import ".././stylesheets/SingleArticle.css";
import ErrorPage from "./ErrorPage";

function SingleArticle() {
  const [error, setError] = useState(null);
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  const getArticleById = () => {
    getSingleArticle(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        if (response.status === 400) {
          setError(`Error ${response.status}: ${response.data.msg}`);
        } else {
          setError(`Error ${response.status}: ${response.data.msg}`);
        }
      });
  };

  useEffect(() => {
    getArticleById();
  }, [article_id]);

  if (error) {
    return <ErrorPage errorMsg={error} />;
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div id="single-article-page">
      <SingleArticleCard article={article} setArticle={setArticle} id="single-article-card"/>
      <Comments article={article} id="comments"/>
      <HighlightArticles id="highlight-articles-column" />
    </div>
  );
}

export default SingleArticle;
