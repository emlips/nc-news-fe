import { Link } from "react-router-dom";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ".././stylesheets/ArticleCard.css";

function ArticleCard({ article }) {
  return (
    <Link className="article-card-link" to={`/articles/${article.article_id}`}>
      <div id="article-card">
        <h1>{article.title}</h1>
        <h2>By {article.author}</h2>
        <img src={article.article_img_url} alt={article.title} />
        <p>
          <ModeCommentIcon />
          {article.comment_count}
        </p>
      </div>
    </Link>
  );
}

export default ArticleCard;
