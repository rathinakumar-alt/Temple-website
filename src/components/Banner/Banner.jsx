import React from 'react';
import bannerImage from '../../assets/temple-banner.png';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-container">
        <img 
          src={bannerImage} 
          alt="Sri Kathirvelayuthaswamy Temple Banner" 
          className="banner-image"
        />
      </div>
    </section>
  );
};

export default Banner;
