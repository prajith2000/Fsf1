
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Networks</h1>
      <ul>
        <li><Link to="/">Alumni</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/Signup">Signup</Link></li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
