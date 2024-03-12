import { useState } from "react";
import { useContext } from "react";
import UserContext from "../contexts/User";
import axios from "axios";

function PostComment({ article, setComments }) {
  const { loggedInUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const commentsApi = axios.create({
    baseURL: `https://nc-news-1d1v.onrender.com/api/articles/${article.article_id}`,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentToPost = {
      username: loggedInUser.username,
      body: newComment,
    };
    return commentsApi.post("/comments", commentToPost).then(({ data }) => {
      setNewComment("");
      setComments((currComments) => {
        return [data.newComment, ...currComments];
      });
    });
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
