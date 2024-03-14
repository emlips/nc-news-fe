import { Link } from "react-router-dom";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ".././stylesheets/HighlightArticleCard.css";

function ArticleCard({ article, setCurrTopic }) {
  return (
    <>
      <div id="highlight-article-card">
        <Link
          className="article-card-link"
          to={`/articles/${article.article_id}`}
        >
          <div id="image">
            <img src={article.article_img_url} alt={article.title} />
          </div>
        </Link>
        <div id="info">
          <h1>{article.title}</h1>
          <Link
            className="highlight-topic-link"
            to={`/articles?topic=${article.topic}`}
            key={article.topic}
            onClick={() => {
              setCurrTopic(article.topic);
            }}
          >
            <h2>{article.topic[0].toUpperCase() + article.topic.slice(1)}</h2>
          </Link>
          <div className="icons">
            <p>
              <ThumbUpOutlinedIcon />
              {article.votes}
            </p>
            <p>
              <ModeCommentOutlinedIcon />
              {article.comment_count}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleCard;
