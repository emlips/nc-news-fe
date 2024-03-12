import { deleteComment } from "../api";
import { useEffect } from "react";

function DeleteComment({ comment, setComments, setCommentCount }) {
  const handleClick = () => {
    deleteComment(comment.comment_id).then(() => {
      setComments((currComments) => {
        return currComments.map((currComment) => {
          if (currComment.comment_id !== comment.comment_id) {
            return currComment;
          }
        });
      });
      setCommentCount((currCount) => {
        return currCount - 1;
      });
    });
  };

  return <button onClick={handleClick}>Delete</button>;
}

export default DeleteComment;
