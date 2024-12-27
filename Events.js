// src/components/pages/Events.js

import React, { useState, useEffect } from 'react';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulated API call to fetch events
    const fetchEvents = async () => {
      const simulatedEvents = [
        { id: 1, title: 'Alumni Meetup', date: '2024-12-10', description: 'A gathering for all alumni.' },
        { id: 2, title: 'Tech Talk', date: '2024-12-15', description: 'A talk on emerging tech trends.' },
        { id: 3, title: 'Job Fair', date: '2025-01-20', description: 'A job fair for alumni and students.' },
      ];
      setEvents(simulatedEvents);
    };

    fetchEvents();
  }, []);

  return (
    <div className="events-section">
      <h2>Upcoming Events</h2>
      {events.length === 0 ? (
        <p>Loading events...</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Events;
