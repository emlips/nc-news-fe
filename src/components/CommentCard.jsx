import { useContext } from "react";
import UserContext from "../contexts/User";
import ".././stylesheets/CommentCard.css";
import DeleteComment from "./DeleteComment";

function CommentCard({ comment, setComments, setCommentCount }) {
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      {comment ? (
        <div className="comment-card">
          <div className="delete-comment-section">
            <p id="comment-author">{comment.author}</p>
            {loggedInUser && comment.author === loggedInUser.username ? (
              <DeleteComment
                comment={comment}
                setComments={setComments}
                setCommentCount={setCommentCount}
              />
            ) : null}
          </div>
          <p id="comment-date">
            Posted{" "}
            {comment.created_at
              ? comment.created_at.slice(0, 10) +
                " at " +
                comment.created_at.slice(11, 16)
              : "just now"}
          </p>
          <p id="comment-body">{comment.body}</p>
          <p id="vote-count">Votes: {comment.votes}</p>
        </div>
      ) : null}
    </>
  );
}

export default CommentCard;
