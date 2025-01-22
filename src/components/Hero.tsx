import React from 'react';
import NavBar from './NavBar';
import '@/app/styles/Hero.css';

const Hero = () => {
  return (
    <div id="hero" className="hero-section">
      <NavBar />

      <div className="hero-container">
        {/* Profile Image */}
        <div className="hero-image"></div>

        {/* Text Section */}
        <div className="hero-text">
          <p className="animated fadeInSlide">Anosha Fatima</p>
          <p className="animated fadeInSlide delay-1s">Welcome To My</p>
          <p className="animated fadeInSlide delay-2s">Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
