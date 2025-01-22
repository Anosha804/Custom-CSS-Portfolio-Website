import React from 'react'
import '@/app/styles/About.css';

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-grid">
        {/* Text Content */}
        <div className="about-text">
          <h2 className="about-heading">About Me</h2>
          <p className="about-description">
            I am an enthusiastic and committed front-end developer with a passion for crafting interactive and user-friendly web applications. 
            I thrive on designing and building exceptional digital experiences. With expertise in React, Next.js, TypeScript, and Tailwind CSS, 
            I aim to tackle real-world challenges with optimized and maintainable code. I am eager to embrace new opportunities and continuously enhance my skills.
          </p>
        </div>

        {/* Image */}
        <div className="about-image-container">
          <img
            src="/aboutme.jpg"
            alt="About Me"
            className="about-image flip-up"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
