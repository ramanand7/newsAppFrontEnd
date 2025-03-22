import React from 'react';
import { Link } from 'react-router-dom'; // Add Link import to navigate
import './NewsList.css';

const NewsList = ({ news }) => {
  // Add a fallback for news to prevent undefined errors
  const articles = news || [];

  return (
    <div className="news-list">
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={article.url || index} className="news-item">
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <Link to={`/article/${encodeURIComponent(article.url)}`}>Read more</Link>
          </div>
        ))
      ) : (
        <p>No news available at the moment.</p>
      )}
    </div>
  );
};

export default NewsList;
