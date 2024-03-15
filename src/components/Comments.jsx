import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import { getComments, getMoreComments } from "../api";
import "../stylesheets/Comments.css";

function Comments({ article }) {
  const [isLoading, setIsLoading] = useState(true)
  const [comments, setComments] = useState([]);
  const [commentPage, setCommentPage] = useState(1);
  const [commentCount, setCommentCount] = useState(article.comment_count);

  let totalPages = Math.ceil(commentCount / 10);

  useEffect(() => {
    setIsLoading(true)
    getComments(article.article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setCommentCount(article.comment_count);
      setCommentPage(1)
      setIsLoading(false)
    });
  }, [article]);

  const loadComments = (num) => {
    const page = commentPage + num;
    getMoreComments(article.article_id, page).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setCommentPage((currPage) => {
        return currPage + num;
      });
    });
  };

  if (isLoading) return <p id='loading-comments'>Loading comments...</p>;

  return (
    <section className="comments-section">
      <h3>Comments:</h3>
      <PostComment
        article={article}
        setComments={setComments}
        setCommentCount={setCommentCount}
        setCommentPage={setCommentPage}
      />
      <p>Total comments: {commentCount}</p>
      {comments.map((comment, index) => {
        return (
          <CommentCard
            key={index}
            setComments={setComments}
            comment={comment}
            setCommentCount={setCommentCount}
          />
        );
      })}
      <button
        onClick={() => loadComments(-1)}
        disabled={commentPage === 1 ? true : false}
        className="page-button"
      >
        Previous Page
      </button>
      <button
        onClick={() => loadComments(1)}
        disabled={commentPage === totalPages ? true : false}
        className="page-button"
      >
        Next Page
      </button>
      <p>
        Viewing page {commentPage} of {totalPages}
      </p>
    </section>
  );
}

export default Comments;
