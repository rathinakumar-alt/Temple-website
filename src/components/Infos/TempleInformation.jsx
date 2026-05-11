import React from 'react';
import './TempleInformation.css';

const TempleInformation = () => {
  return (
    <section className="temple-info-section">
      <div className="temple-info-container">

        {/* Left Column: Opening Times Card */}
        <div className="darshan-card">
          <div className="status-badge">
            <span className="status-dot"></span>
            LIVE STATUS: OPEN
          </div>

          <div className="card-icon-container">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#854d0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>

          <h2 style={{ fontFamily: 'serif' }}>Opening Times</h2>
          <p>
            Experience the divine grace during our sacred opening hours.
          </p>

          <div className="timing-list" style={{ marginTop: 'auto' }}>
            <div className="timing-row">
              <span className="timing-label">Tuesdays & Fridays</span>
              <span className="timing-value">18:00 - 20:00</span>
            </div>
            <div className="timing-note" style={{ marginTop: '1rem', fontSize: '0.85rem', fontStyle: 'italic', color: '#57534e' }}>
              Timings differ on Special Pooja Days
            </div>
          </div>
        </div>

        {/* Right Column: Details Grid */}
        <div className="details-section">
          <h2>Daily Rituals &amp; Offerings</h2>

          {/* Decorative watermark icon */}
          <div className="info-grid">
            {/* Dawn Card */}
            <div className="info-card">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#854d0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
              </svg>
              <span className="info-card-label">DAWN</span>
              <div className="info-card-title">Morning Abhishekam</div>
              <div className="info-card-content">
                05:30 AM Daily
              </div>
            </div>

            {/* Noon Card */}
            <div className="info-card">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#854d0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"></path>
                <path d="M19 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"></path>
              </svg>
              <span className="info-card-label">NOON</span>
              <div className="info-card-title">Uchi Kala Pooja</div>
              <div className="info-card-content">
                12:00 PM Daily
              </div>
            </div>

            {/* Twilight Card */}
            <div className="info-card">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#854d0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"></path>
              </svg>
              <span className="info-card-label">TWILIGHT</span>
              <div className="info-card-title">Evening Arathi</div>
              <div className="info-card-content">
                06:30 PM Daily
              </div>
            </div>
          </div>

          {/* Bottom Actions Row */}
          <div className="action-grid">
            <div className="action-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8e2a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Book Puja</span>
            </div>
            <div className="action-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8e2a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"></path>
                <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path>
                <path d="m2 15 6 6"></path>
                <path d="M19.5 8.5c0-.77-1.11-1.39-2.5-1.39S14.5 7.73 14.5 8.5C14.5 9.27 15.61 9.89 17 9.89s2.5-.62 2.5-1.39Z"></path>
              </svg>
              <span>Donation</span>
            </div>
            <div className="action-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8e2a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span>Gallery</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TempleInformation;
