import React from 'react';
import { useParams } from 'react-router-dom';

const ReadArticle = ({ news }) => {
  const { id } = useParams();

  // Find the article based on the 'id' from URL params
  const article = news.find((article) => article.url === decodeURIComponent(id));

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <div className="article">
      <h2>{article.title}</h2>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <p>{article.content || article.description}</p>
      <p>{article.author}</p>
    </div>
  );
};

export default ReadArticle;
