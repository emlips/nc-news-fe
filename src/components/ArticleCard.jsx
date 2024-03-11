import ModeCommentIcon from "@mui/icons-material/ModeComment";
import "./ArticleCard.css";
import "./Articles.css";

function ArticleCard({ article }) {
  return (
    <div id="article-card">
      <h1>{article.title}</h1>
      <h2>By {article.author}</h2>
      <img src={article.article_img_url} alt="" />
      <p>
        <ModeCommentIcon />
        {article.comment_count}
      </p>
    </div>
  );
}

export default ArticleCard;
