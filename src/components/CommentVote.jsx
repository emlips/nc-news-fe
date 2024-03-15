import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { useState } from "react";
import { patchComment } from "../api";

function CommentVote({ comment }) {
  const [votes, setVotes] = useState(comment.votes);
  const [hasVotedUp, setHasVotedUp] = useState(false);
  const [hasVotedDown, setHasVotedDown] = useState(false);

  const handleVote = (num) => {
    const voteChange = { inc_votes: num };
    setVotes((currVotes) => {
      return currVotes + num;
    });
    patchComment(comment.comment_id, voteChange).catch((err) => {
      setVotes((currVotes) => {
        return currVotes - num;
      });
    });
  };

  const upVote = () => {
    if (hasVotedUp) {
      setHasVotedUp(false);
      handleVote(-1);
    } else if (!hasVotedUp) {
      setHasVotedUp(true);
      handleVote(1);
    }
  };

  const downVote = () => {
    if (hasVotedDown) {
      setHasVotedDown(false);
      handleVote(1);
    } else if (!hasVotedDown) {
      setHasVotedDown(true);
      handleVote(-1);
    }
  };

  return (
    <div className="comment-vote-section">
      <p id="comment-count">
        <ThumbUpOutlinedIcon />
        {votes}
      </p>
      <div id="vote-section">
        <p>Vote:</p>
        <div id="up-vote">
          <button
            onClick={upVote}
            aria-label="up-vote"
            style={
              hasVotedUp
                ? { backgroundColor: "lightGreen" }
                : { backgroundColor: "white" }
            }
            disabled={hasVotedDown ? true : false}
          >
            <ArrowUpwardOutlinedIcon
              fontSize="small"
              color={hasVotedDown ? "disabled" : "primary"}
            />
          </button>
        </div>
        <div id="down-vote">
          <button
            onClick={downVote}
            aria-label="down-vote"
            style={
              hasVotedDown
                ? { backgroundColor: "lightCoral" }
                : { backgroundColor: "white" }
            }
            disabled={hasVotedUp ? true : false}
          >
            <ArrowDownwardOutlinedIcon fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentVote;
