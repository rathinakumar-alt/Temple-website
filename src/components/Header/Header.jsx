import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo-section">
          <div className="temple-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 21h18" strokeLinecap="round" />
              <path d="M5 21v-7h14v7" strokeLinecap="round" />
              <path d="M7 14v-4l5-4l5 4v4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 2l0 4" strokeLinecap="round" />
              <path d="M10 21v-4a2 2 0 0 1 4 0v4" strokeLinecap="round" />
              <circle cx="12" cy="1.5" r="0.5" fill="currentColor" />
            </svg>
          </div>
          <h1 className="logo-text">Sri Kathirvelayuthaswamy Temple</h1>
        </div>

        <nav className="nav-menu">
          <a href="/" className="nav-link">Home</a>
          <a href="/puja" className="nav-link">Puja</a>
          <a href="/events" className="nav-link">Events</a>
          <a href="/donations" className="nav-link">Donations</a>
        </nav>

        <div className="action-section">
          <button className="notification-btn" aria-label="Notifications">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
