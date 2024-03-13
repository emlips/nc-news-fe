import { Link } from "react-router-dom";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ".././stylesheets/ArticleCard.css";

function ArticleCard({ article }) {
  return (
    <Link className="article-card-link" to={`/articles/${article.article_id}`}>
      <div id="article-card">
        <h1>{article.title}</h1>
        <h2>By {article.author}</h2>
        <p>Posted {article.created_at.slice(0, 10)}</p>
        <img src={article.article_img_url} alt={article.title} />
        <div className="icons">
          <p>
            <ModeCommentOutlinedIcon />
            {article.comment_count}
          </p>
          <p>
            <ThumbUpOutlinedIcon />
            {article.votes}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
