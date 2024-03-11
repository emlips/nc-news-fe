import ArticleVote from "./ArticleVote";
import ".././stylesheets/SingleArticle.css";

function SingleArticleCard({ article, setArticle }) {
  return (
    <>
      <div className="single-article-card">
        <h1>{article.title}</h1>
        <h2>By {article.author}</h2>
        {article.created_at ? (
          <p>Posted {article.created_at.slice(0, 10)}</p>
        ) : null}
        <ArticleVote article={article} setArticle={setArticle} />
        <img src={article.article_img_url} alt="" />
        <p>{article.body}</p>
      </div>
    </>
  );
}

export default SingleArticleCard;
