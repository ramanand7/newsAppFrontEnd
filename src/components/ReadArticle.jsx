import React from 'react';
import { useParams } from 'react-router-dom';
import './ReadArticle.css';

const ReadArticle = ({ news }) => {
  const { id } = useParams();
  const article = news.find((item) => item.id === parseInt(id));

  if (!article) {
    return <div>Article not found!</div>;
  }

  // Suggested articles (excluding the current one)
  const suggestedArticles = news.filter((item) => item.id !== parseInt(id)).slice(0, 3);

  return (
    <div className="read-article">
      <div className="article-content">
        <h1>{article.title}</h1>
        <img src={article.imageUrl} alt={article.title} />
        <p>{article.fullContent}</p>
      </div>

      <div className="suggested-articles">
        <h2>Suggested Articles</h2>
        <div className="suggested-list">
          {suggestedArticles.map((item) => (
            <div key={item.id} className="suggested-item">
              <img src={item.imageUrl} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={`/article/${item.id}`}>Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadArticle;