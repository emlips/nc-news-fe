import ".././stylesheets/CommentCard.css";

function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <p id="comment-author">{comment.author}</p>
      <p id="comment-date">Posted {comment.created_at.slice(0, 10)}</p>
      <p id="comment-body">{comment.body}</p>
      <p>Votes: {comment.votes}</p>
    </div>
  );
}

export default CommentCard;
