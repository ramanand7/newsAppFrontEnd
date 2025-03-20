import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Footer from './components/Footer';
import ReadArticle from './components/ReadArticle';
import './App.css';

const App = () => {
  // Sample news data (replace with API data later)
  const news = [
    {
      id: 1,
      title: 'Breaking News: React is Awesome!',
      description: 'Learn how to build a news website using React.',
      imageUrl: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1AUlkS.img?w=549&h=309&m=6&x=216&y=96&s=106&d=106',
      fullContent: 'React is a powerful JavaScript library for building user interfaces. It allows developers to create reusable components and manage state efficiently.',
    },
    {
      id: 2,
      title: 'World News: Global Summit on Climate Change',
      description: 'Leaders from around the world gather to discuss climate action.',
      imageUrl: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1AZc7g.img?w=768&h=432&m=6',
      fullContent: 'The global summit on climate change brought together leaders from over 100 countries to discuss strategies for reducing carbon emissions and promoting sustainable development.',
    },
    {
      id: 3,
      title: 'Technology: AI Revolutionizing Industries',
      description: 'Artificial Intelligence is transforming the way we work and live.',
      imageUrl: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1AUCay.img?w=768&h=432&m=6&x=435&y=105&s=158&d=158',
      fullContent: 'Artificial Intelligence (AI) is revolutionizing industries such as healthcare, finance, and transportation by automating processes and providing data-driven insights.',
    },
    {
      id: 4,
      title: 'Breaking News: React is Awesome!',
      description: 'Learn how to build a news website using React.',
      imageUrl: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1A4nAa.img?w=768&h=432&m=6&x=600&y=36&s=120&d=120',
      fullContent: 'React is a powerful JavaScript library for building user interfaces. It allows developers to create reusable components and manage state efficiently.',
    },
    {
      id: 5,
      title: 'World News: Global Summit on Climate Change',
      description: 'Leaders from around the world gather to discuss climate action.',
      imageUrl: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1AZc7g.img?w=768&h=432&m=6',
      fullContent: 'The global summit on climate change brought together leaders from over 100 countries to discuss strategies for reducing carbon emissions and promoting sustainable development.',
    },
    {
      id: 6,
      title: 'Technology: AI Revolutionizing Industries',
      description: 'Artificial Intelligence is transforming the way we work and live.',
      imageUrl: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1AUlkS.img?w=549&h=309&m=6&x=216&y=96&s=106&d=106',
      fullContent: 'Artificial Intelligence (AI) is revolutionizing industries such as healthcare, finance, and transportation by automating processes and providing data-driven insights.',
    },
  ];

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