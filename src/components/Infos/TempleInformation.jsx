import React from 'react';
import './TempleInformation.css';

const TempleInformation = () => {
  return (
    <section className="temple-info-section">
      <div className="temple-info-container">

        {/* Left Column: Opening Times Card */}
        <div className="darshan-card">
          <div className="card-header">
            <div className="card-icon-container">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#854d0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="status-badge">
              <span className="status-dot"></span>
              LIVE STATUS: OPEN
            </div>
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


      </div>
    </section>
  );
};

export default TempleInformation;
