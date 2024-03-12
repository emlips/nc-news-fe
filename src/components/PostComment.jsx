import { useState } from "react";
import { useContext } from "react";
import UserContext from "../contexts/User";
import { postComment } from "../api";

function PostComment({ article, setComments, setCommentCount }) {
  const { loggedInUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };

  return (
    <form id="post-comment-block" onSubmit={handleSubmit}>
      <label htmlFor="new-comment-input"></label>
      <textarea
        id="new-comment-input"
        multiline="true"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <button type="submit">Post Comment</button>
    </form>
  );
}

export default PostComment;
