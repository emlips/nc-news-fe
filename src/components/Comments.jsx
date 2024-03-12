import { useState, useEffect } from "react";
import axios from "axios";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

function Comments({ article }) {
  const [comments, setComments] = useState([]);

  const commentsApi = axios.create({
    baseURL: "https://nc-news-1d1v.onrender.com/api/articles",
  });

  const getComments = () => {
    return commentsApi
      .get(`/${article.article_id}/comments`)
      .then(({ data }) => {
        setComments(data.comments.reverse());
      });
  };

  useEffect(() => {
    getComments();
  }, [comments]);

  return (
    <>
      <h3>Comments:</h3>
      <PostComment article={article} setComments={setComments}/>
      <p>Total comments: {article.comment_count}</p>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </>
  );
}

export default Comments;
