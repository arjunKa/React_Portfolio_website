import React from 'react';
import './project.css';
import projectImage from '../../assets/ProjectImages/healthAppImage.png';

import cppIcon from '../../assets/icons/cplusplus.svg';

const Project5 = ({ date, header }) => (
  <div className="portfolio__project-container">
    <div className="portfolio__project-container-content">
      {date ? <p>{date}</p> : null}

      <div className="portfolio__project-container-content-image-and-text">
        <div className="portfolio__project-container-content-text">
          <h3>{header}</h3>

          <div className="portfolio__project-container-content-logos">
            <img src={cppIcon} alt="C++ logo" />
          </div>

          <div className="portfolio__blog-container_article-content_options">
            <a
              href="https://github.com/arjunKa/HealthApp"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="button">GitHub</div>
            </a>
          </div>

          <p>
            A C++ console app with a saving feature to allow users to store
            their biometric data, calorie and fitness progress. The user data
            is then used to form simple calculations and predictions for the
            user such as their BMI and more complicated ones such as estimated
            calorie intake to help in weight gain or weight loss. JSON is used
            to save and retrieve user data and resume progress such as calorie
            tracking across days. C++ is ideal for JSON data retrieval and
            permits control over the storage of the user data.
          </p>
        </div>

        <div className="portfolio__project-container-content-image">
          <img src={projectImage} alt="Health app" />
        </div>
      </div>
    </div>
  </div>
);

export default Project5;
