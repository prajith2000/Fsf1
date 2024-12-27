import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './JoinNetwork.css';

function Networks() {
  const [networks] = useState([
    { id: 1, name: 'N.B.K.R Institute of Science and Technology-NBKRIST' },
    { id: 2, name: 'MBIS Alumni Association-MBIS' },
    { id: 3, name: 'Massachusetts Institute of Technology' },
    { id: 4, name: 'KGES Alumni Association-KGES' },
    { id: 5, name: 'ALLEN Career Institute' },
  ]);

  const [joinedNetworks, setJoinedNetworks] = useState([]);
  const navigate = useNavigate(); 

  const handleJoinNetwork = (networkId) => {
    setJoinedNetworks((prevJoinedNetworks) => [...prevJoinedNetworks, networkId]);
    navigate('/Profileform'); 
  };

  return (
    <div className="networks-container">
      <h1
        className="title"
        style={{
          color: '#3498db',
          textShadow: '1px 1px 2px #2c3e50',
          fontSize: '2.5rem',
          fontWeight: 'bold',
        }}
      >
        Networks
      </h1>

      <ul className="networks-list">
        {networks.map((network) => (
          <li key={network.id} className="network-item">
            <div className="network-info">
              <h3 className="network-name">{network.name}</h3>
              {joinedNetworks.includes(network.id) ? (
                <button className="joined-button" disabled>
                  Joined
                </button>
              ) : (
                <button
                  className="join-button"
                  onClick={() => handleJoinNetwork(network.id)}
                >
                  Join Network
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Networks;
