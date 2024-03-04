import React from 'react';
import backgroundImage from './image5.jpg'; // Import the background image
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="home-content">
        <h1>Welcome to the Green Lane Event Venue Reservation</h1>
      </div>
    </div>
  );
};

export default Home;
