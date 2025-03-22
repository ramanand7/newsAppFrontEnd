import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Footer from './components/Footer';
import ReadArticle from './components/ReadArticle';
import './App.css';

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews('general'); // Fetch general category news when component mounts
  }, []);

  const fetchNews = async (category) => {
    try {
      const response = await fetch(`http://localhost:8080/news/fetchByCategory?category=${category}`);
      if (response.ok) {
        const data = await response.json();
        // Assuming the response is wrapped in an array and you want the 'articles' array from the first object
        setNews(data[0].articles); // Set the articles array to state
      } else {
        console.error("Error fetching news data.");
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<NewsList news={news} />} />
          <Route path="/article/:id" element={<ReadArticle news={news} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
