import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import { getComments } from "../api";

function Comments({ article }) {
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(article.comment_count);

  const fetchComments = () => {
    getComments(article.article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  };

  useEffect(() => {
    fetchComments();
  }, [comments]);

  return (
    <>
      <h3>Comments:</h3>
      <PostComment
        article={article}
        setComments={setComments}
        setCommentCount={setCommentCount}
      />
      <p>Total comments: {commentCount}</p>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </>
  );
}

export default Comments;
