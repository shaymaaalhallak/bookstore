import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/home.css'; // make sure path is correct

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-overlay"></div>

      <div className="home-content">
        <h1 className="home-title">Welcome to Our Bookstore</h1>
        <p className="home-intro">
          Explore thousands of books from programming, self-help, history, fiction, and more.
          Find your next favorite book and buy it in the easiest way possible!
        </p>
        <button
          className="home-btn"
          onClick={() => navigate('/browse')}
        >
          Browse Books
        </button>
      </div>
    </div>
  );
}
