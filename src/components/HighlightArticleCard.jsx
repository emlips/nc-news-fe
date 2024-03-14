import { Link } from "react-router-dom";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ".././stylesheets/HighlightArticleCard.css";

function ArticleCard({ article, setCurrTopic }) {
  return (
    <Link className="article-card-link" to={`/articles/${article.article_id}`}>
      <div id="highlight-article-card">
        <div id="image">
          <img src={article.article_img_url} alt={article.title} />
        </div>
        <div id="info">
          <h1>{article.title}</h1>
          <Link to={`/articles?topic=${article.topic}`} key={article.topic} onClick={() => {
              setCurrTopic(article.topic)
            }} ><h2>{article.topic[0].toUpperCase() + article.topic.slice(1)}</h2></Link>
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
