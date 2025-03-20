import React from 'react';
import { Link } from 'react-router-dom';
import NewsItem from './NewsItem';
import './NewsList.css';

const NewsList = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((item) => (
        <NewsItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default NewsList;