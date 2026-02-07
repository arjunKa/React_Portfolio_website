import React from 'react';
import './project.css';
import projectImage from '../../assets/ProjectImages/EcoLearnAppImage.png';

import reactIcon from '../../assets/icons/react.png';
import python from '../../assets/icons/python.svg';

const Project6 = ({ date, header }) => (
  <div className="portfolio__project-container">
    <div className="portfolio__project-container-content">
      {date ? <p>{date}</p> : null}

      <div className="portfolio__project-container-content-image-and-text">
        <div className="portfolio__project-container-content-text">
          <h3>{header}</h3>

          <div className="portfolio__project-container-content-logos">
            <img src={python} alt="Python logo" />
            <img src={reactIcon} alt="React logo" />
          </div>

          <div className="portfolio__blog-container_article-content_options">
            <a
              href="https://github.com/arjunKa/EcoLearning"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="button">GitHub</div>
            </a>
            <a
              href="https://www.ecolearn.ca"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="button">Try it</div>
            </a>
          </div>

          <p>
            A web app that lets you record your carbon reduction and quantify
            your impact. This project was used by LSF to help students quantify
            their impact on sustainability projects. A custom-made REST API was
            built to call and retrieve all the data needed for the
            calculations, and the data is based on research on carbon emissions
            in Canada. The tools used are Django, React, PostgreSQL and Azure
            for deployment.
          </p>
        </div>

        <div className="portfolio__project-container-content-image">
          <img src={projectImage} alt="EcoLearn app" />
        </div>
      </div>
    </div>
  </div>
);

export default Project6;
