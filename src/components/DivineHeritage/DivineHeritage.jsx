import React from 'react';
import './DivineHeritage.css';
import muruganImg from '../../assets/murugan.png';

const DivineHeritage = () => {
  return (
    <section className="divine-heritage-section">
      <div className="divine-heritage-container">

        <div className="heritage-left-col">
          <div className="heritage-image-wrapper">
            <img src={muruganImg} alt="Dravidian Deity" className="heritage-image" />
            <div className="chant-card">
              <h3>"Velli Deva Sena Sametha Sri Kathrivelayuthaswamy"</h3>
            </div>
          </div>
          <button className="calendar-btn">View 2026 Festival Calendar</button>
        </div>

        {/* Right Content Section */}
        <div className="heritage-content">
          <p>
            Welcome to the official home of <strong>Sri Kathirvelayuthaswamy Alayam</strong> in Essen. Our temple is dedicated to the presiding deity, <strong>Velli Deva Sena Sametha Kathrivelayuthaswamy</strong>, it is a sacred home to many <strong>Divine Manifestations</strong> that guide our community.
          </p>
          <br />
          <p>
            For our processions and special festivals, we are graced by the <strong>Urchava Moorthys</strong> (Processional Forms) of:
          </p>
          <ul className="deity-list">
            <li><strong>Velli Deva Sena Sametha Sri Kathrivelayuthaswamy</strong></li>
            <li><strong>Lord Shivan and Goddess Paarvathi</strong></li>
            <li><strong>Lord Vishnu</strong> (Samedha Bhoodevi and Sridevi)</li>
            <li><strong>Lord Vinayakar</strong></li>
            <li><strong>Sri Raja Rajeshwari</strong></li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default DivineHeritage;
