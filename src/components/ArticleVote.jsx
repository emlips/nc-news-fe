import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { useState } from "react";
import axios from "axios";

function ArticleVote({ article, setArticle }) {
  const [votes, setVotes] = useState(article.votes);
  const [hasVotedUp, setHasVotedUp] = useState(false);
  const [hasVotedDown, setHasVotedDown] = useState(false);

  const upVoteButton = document.getElementById("up-vote");
  const downVoteButton = document.getElementById("down-vote");

  const articlesApi = axios.create({
    baseURL: "https://nc-news-1d1v.onrender.com/api/articles",
  });

  const handleVote = (num) => {
    if (num === 1) {
      setHasVotedUp(true);
      setHasVotedDown(false);
    } else {
      setHasVotedDown(true);
      setHasVotedUp(false);
    }
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

  const upVote = () => {
    if (hasVotedDown) {
      downVoteButton.classList.remove("down-voted");
    }
    if (hasVotedUp) {
      handleVote(-1);
      upVoteButton.classList.remove("up-voted");
    } else if (!hasVotedUp) {
      handleVote(1);
      upVoteButton.classList.add("up-voted");
    }
  };

  const downVote = () => {
    if (hasVotedUp) {
      upVoteButton.classList.remove("up-voted");
    }
    if (hasVotedDown) {
      handleVote(1);
      downVoteButton.classList.remove("down-voted");
    } else if (!hasVotedDown) {
      handleVote(-1);
      downVoteButton.classList.add("down-voted");
    }
  };

  return (
    <>
      <p>
        <ThumbUpOutlinedIcon />
        {votes}
      </p>
      <div id="vote-section">
        <p>Vote:</p>
        <div id="up-vote">
          <button onClick={upVote}>
            <ArrowUpwardOutlinedIcon fontSize="small" />
          </button>
        </div>
        <div id="down-vote">
          <button onClick={downVote}>
            <ArrowDownwardOutlinedIcon fontSize="small" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ArticleVote;
