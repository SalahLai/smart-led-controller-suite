import React from 'react';
import './Menu.css';

function HomeMenu({ onStart }) {
  return (
    <div className="menu home-menu">
      <div className="greeting">👋 Welcome to LED Controller</div>
      <div className="instruction">Let’s set up your LED device!</div>
      <button className="primary-btn" onClick={onStart}>
        Start Device Setup
      </button>
      <div className="footer">LED Controller App</div>
    </div>
  );
}

export default HomeMenu;
