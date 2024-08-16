import React from 'react';
import axios from 'axios';
import './Navbar.css'; 
import foodbear from './Restaurants_1/Img/foodbear.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ username, setUser }) => {
  const location = useLocation();

  const handleLogout = () => {
    axios.post('http://localhost:8080/logout')
      .then(response => {
        alert('Logged out successfully!');
        setUser(null); // Clear the username
        window.location.href = '/'; // Redirect to the home page
      })
      .catch(error => {
        console.error('Logout error:', error);
        alert('An error occurred while logging out.');
      });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={foodbear} alt="Logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
      <div className="auth-links">
        {username ? (
          <>
            <span>Welcome, {username}</span>
            <button id="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button id="login-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button id="signup-btn">Signup</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
