function SingleArticleCard({ article }) {
  return (
    <>
      <div className="single-article-card">
        <h1>{article.title}</h1>
        <h2>By {article.author}</h2>
        {article.created_at ? (
          <p>Posted {article.created_at.slice(0, 10)}</p>
        ) : null}
        <img src={article.article_img_url} alt="" />
        <p>{article.body}</p>
      </div>
    </>
  );
}

export default SingleArticleCard;
