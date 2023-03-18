import React, { useState, useEffect } from "react";

function Comment({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [postId]);

  return (
    <div>
      <h2>Comments:</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Comment;
