import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleArticleCard from "./SingleArticleCard";
import Comments from "./Comments";
import { getSingleArticle } from "../api";
import ".././stylesheets/SingleArticle.css";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  const getArticleById = () => {
    getSingleArticle(article_id)
    .then((articleFromApi) => {
      setArticle(articleFromApi)
      setIsLoading(false)
    })
  };

  useEffect(() => {
    getArticleById();
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <SingleArticleCard article={article} setArticle={setArticle} />
      <Comments article={article} />
    </>
  );
}

export default SingleArticle;
