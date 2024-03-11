import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { useState } from "react";
import axios from "axios";

function ArticleVote({ article, setArticle }) {
  const [votes, setVotes] = useState(article.votes);

  const articlesApi = axios.create({
    baseURL: "https://nc-news-1d1v.onrender.com/api/articles",
  });

  const handleVote = (num) => {
    const voteChange = { inc_votes: num };
    setVotes((currVotes) => {
      return currVotes + num;
    });
    setArticle((currArticle) => {
      return { ...currArticle, votes: currArticle.votes + num };
    });
    return articlesApi
      .patch(`/${article.article_id}`, voteChange)
      .catch((err) => {
        setVotes((currVotes) => {
          return currVotes - num;
        });
        setArticle((currArticle) => {
          return { ...currArticle, votes: currArticle.votes - num };
        });
      });
  };

  const upVote = () => handleVote(1);
  const downVote = () => handleVote(-1);

  return (
    <>
      <p>
        <ThumbUpIcon />
        {votes}
      </p>
      <div id="vote-section">
        <p>Vote:</p>
        <button onClick={upVote}>
          <ArrowUpwardOutlinedIcon fontSize="small" />
        </button>
        <button onClick={downVote}>
          <ArrowDownwardOutlinedIcon fontSize="small" />
        </button>
      </div>
    </>
  );
}

export default ArticleVote;
