import React from 'react';
import './project.css';
import projectImage from '../../assets/ProjectImages/detectiveDom.jpg';

import java from '../../assets/icons/java.svg';

const Project3 = ({ date, header }) => (
  <div className="portfolio__project-container">
    <div className="portfolio__project-container-content">
      {date ? <p>{date}</p> : null}

      <div className="portfolio__project-container-content-image-and-text">
        <div className="portfolio__project-container-content-text">
          <h3>{header}</h3>

          <div className="portfolio__project-container-content-logos">
            <img src={java} alt="Java logo" />
          </div>

          <div className="portfolio__project-actions">
            <a
              href="https://www.greenfoot.org/scenarios/25657"
              target="_blank"
              rel="noreferrer noopener"
              className="button"
            >
              Try It
            </a>
          </div>

          <p>
            This is a game demo using Java and the Greenfoot game engine software
            to demonstrate a branching path style of game. It utilizes JSON to store
            all these paths in the game and the dialogue options. In the demo, you
            play as Detective Dom and must investigate a case through the use of
            interrogation, clue-finding and looking for correlations during your
            investigation. You collect evidence, more questions and more suspects
            until you can find an answer.
          </p>
        </div>

        <div className="portfolio__project-container-content-image">
          <img src={projectImage} alt="Detective Dom demo" />
        </div>
      </div>
    </div>
  </div>
);

export default Project3;
