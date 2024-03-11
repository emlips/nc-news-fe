import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleArticleCard from "./SingleArticleCard";
import Comments from "./Comments";
import ".././stylesheets/SingleArticle.css";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  const getArticleById = () => {
    return axios
      .get(`https://nc-news-1d1v.onrender.com/api/articles/${article_id}`)
      .then(({ data }) => {
        setArticle(data.article);
        setIsLoading(false);
      });
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
