import { useState } from "react";
import { useContext } from "react";
import UserContext from "../contexts/User";
import { postComment } from "../api";

function PostComment({
  article,
  setComments,
  setCommentCount,
}) {
  const { loggedInUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [isPostError, setIsPostError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loggedInUser) {
      postComment(article.article_id, loggedInUser.username, newComment).then(
        (newCommentFromApi) => {
          setNewComment("");
          setCommentCount((currCount) => {
            return currCount + 1;
          });
          setComments((currComments) => {
            return [newCommentFromApi, ...currComments];
          });
        }
      );
    }
    else {
      setIsPostError(true)
      setNewComment("")
    }
  };

  return (
    <form id="post-comment-block" onSubmit={handleSubmit}>
      <label htmlFor="new-comment-input">Add a comment below:</label>
      <textarea
        id="new-comment-input"
        multiline="true"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <button type="submit" disabled={!(newComment.length > 0) ? true : false}>
        Post Comment
      </button>
      {isPostError ? <p>Please login to post a comment!</p> : null}
    </form>
  );
}

export default PostComment;
