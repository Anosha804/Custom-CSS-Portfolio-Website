import React from 'react'
import '@/app/styles/Skills.css';

const Skills = () => {
    return (
      <div id="skills" className="skills-container">
        <div className="skills-title">
          <h2 className="skills-heading">
            Technologies I work with
          </h2>
        </div>
  
        <div className="skills-grid">
          <img
            src="/skills-1.png"
            alt="JavaScript and React Skills"
            className="skills-image flip-left"
          />
          <img
            src="/skills-2.png"
            alt="CSS and HTML Skills"
            className="skills-image flip-right"
          />
        </div>
      </div>
    );
  };
  
export default Skills;
