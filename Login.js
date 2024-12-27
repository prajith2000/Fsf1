import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './login.css';
import './Signup.css';

const Login = () => {
  // Define formData using useState
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Initialize navigate function
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      alert('Email is required');
      return;
    }
    if (!formData.password.trim()) {
      alert('Password is required');
      return;
    }

    alert('Login successful!');


    navigate('/Navbar');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 style={{ color: 'blue' }}>Login</h1>
        <div className="form-group">
          <label htmlFor="email" style={{ color: 'blue' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" style={{ color: 'blue' }}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
