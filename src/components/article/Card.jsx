import React from 'react';
import './card.css';

const Card = ({ linkToProject, skills, text }) => (
  <div className="portfolio__card">
    <div className="portfolio__card-content">
      <a href={linkToProject} className="portfolio__card-title">
        <h3>{text}</h3>
      </a>

      <div className="portfolio__card-skills">
        <p className="portfolio__card-label">Skills</p>
        <p>{skills}</p>
      </div>

      <a href={linkToProject} className="portfolio__card-link">
        View Project
      </a>
    </div>
  </div>
);

export default Card;
