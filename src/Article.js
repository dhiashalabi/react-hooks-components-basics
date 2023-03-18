import React, { useState, useEffect } from "react";
import Comment from "./Comment";

function Article() {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => setArticle(data));
  }, []);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Comment postId={article.id} />
    </div>
  );
}

export default Article;
