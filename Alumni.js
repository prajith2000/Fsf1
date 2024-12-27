import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Alumni.css';

function Alumni() {
  const [alumniList, setAlumniList] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const response = await fetch('/api/alumni');
        const data = await response.json();
        setAlumniList(data);
      } catch (error) {
        console.error('Error fetching alumni:', error);
      }
    };

    fetchAlumni();
  }, []);

  const handleJoinNetwork = () => {
    navigate('/JoinNetwork');  
  };

  return (
    <section id="alumni" className="alumni-section">
      <h1 style={{color:'blue'}}>Our Alumni</h1>
      <h2 style={{color:'blue '}}>Join your Alumni Network</h2>
      <h3 style={{color:'blue '}}>
        Leverage the power of your Alumni. Tap below to search for your network powered by Vaave.
      </h3>
      <h4 style={{color:'blue'}}>This platform allows you to connect with fellow alumni,join networks,attend events,
        and stay up-to-date with the latest news and job opportunities.
      </h4>
      <button className="join-network-button" onClick={handleJoinNetwork}>
        Join Network
      </button>
      <p className="happy-reunion">Happy Reunion :)</p>
      
      <ul>
        {alumniList.map((alumnus) => (
          <li key={alumnus.id}>
            {alumnus.name} - {alumnus.batch}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Alumni;
