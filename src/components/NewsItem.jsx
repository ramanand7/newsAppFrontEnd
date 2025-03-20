import React from 'react';
import { Link } from 'react-router-dom';
import './NewsItem.css';

const NewsItem = ({ id, title, description, imageUrl }) => {
  return (
    <div className="news-item">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`/article/${id}`} className="read-more">
        Read More
      </Link>
    </div>
  );
};

export default NewsItem;