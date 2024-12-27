import React, { useState, useEffect } from 'react';
import './News.css';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news data from an API
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  // Predefined static news items
  const staticNews = [
    {
      id: 1,
      title: 'Tech Summit 2024',
      content: 'Join the annual Tech Summit to explore the latest in technology and innovation.',
    },
    {
      id: 2,
      title: 'AI Revolution',
      content: 'Discover how AI is transforming industries worldwide.',
    },
    {
      id: 3,
      title: 'SpaceX Mars Mission',
      content: 'SpaceX announces its timeline for the first human mission to Mars.',
    },
    {
      id: 4,
      title: 'Quantum Computing Breakthrough',
      content: 'Scientists achieve a significant milestone in quantum computing, promising faster processing speeds.',
    },
    {
      id: 5,
      title: 'Green Energy Advancements',
      content: 'New solar panel technology achieves record-breaking efficiency levels.',
    },
    {
      id: 6,
      title: 'Medical AI Innovations',
      content: 'AI systems now assist doctors in diagnosing complex diseases with higher accuracy.',
    },
    {
      id: 7,
      title: 'Global 5G Expansion',
      content: 'Major telecom companies accelerate 5G rollout in underdeveloped regions.',
    },
    {
      id: 8,
      title: 'Electric Vehicle Revolution',
      content: 'Leading automakers announce affordable electric vehicles for mass adoption.',
    },
    {
      id: 9,
      title: 'Cybersecurity Threats',
      content: 'Cybersecurity experts warn of increasing ransomware attacks in 2024.',
    },
    {
      id: 10,
      title: 'Augmented Reality in Education',
      content: 'Schools adopt AR technology to create immersive learning experiences for students.',
    },
  ];
  
  
  

  return (
    <section id="news" className="news-section">
      <h1 style={{color:'red'}}>Latest News</h1>
      <ul>
        {/* Render static news */}
        {staticNews.map((item) => (
          <li key={`static-${item.id}`}>
            <strong>{item.title}:</strong> {item.content}
          </li>
        ))}

        {/* Render fetched news */}
        {news.map((item) => (
          <li key={`fetched-${item.id}`}>
            <strong>{item.title}:</strong> {item.content}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default News;
