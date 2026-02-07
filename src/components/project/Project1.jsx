import React from 'react';
import './project.css';
import coronaCast from '../../assets/ProjectImages/coronaCast.png';
import coronaCast1 from '../../assets/ProjectImages/coronaCast2.png';
import html5 from '../../assets/icons/html5.svg';
import css from '../../assets/icons/css.png';
import js from '../../assets/icons/javascript.svg';

const Project1 = ({ date, header }) => (
  <div className="portfolio__project-container">
    <div className="portfolio__project-container-content">
      {date ? <p>{date}</p> : null}

      <div className="portfolio__project-container-content-image-and-text">
        <div className="portfolio__project-container-content-text">
          <h3>{header}</h3>

          <div className="portfolio__project-container-content-logos">
            <img src={html5} alt="HTML5 logo" />
            <img src={css} alt="CSS logo" />
            <img src={js} alt="JavaScript logo" />
          </div>

          <div className="portfolio__project-actions">
            <a
              href="https://github.com/Ru-Hacks/Coronacast"
              target="_blank"
              rel="noreferrer noopener"
              className="button button--ghost"
            >
              GitHub
            </a>
            <a
              href="https://ru-hacks.github.io/Coronacast/index.html"
              target="_blank"
              rel="noreferrer noopener"
              className="button"
            >
              Try It
            </a>
          </div>

          <p>
            Made during the RUhacks Hackathon, the purpose of this project is to
            provide the user an easy to understand determination of the risk of
            COVID-19 in their area. This project showcases the use of API
            implementation and an HTML + CSS frontend. We take the user's location
            and use the Google Maps API to determine the traffic congestion in the
            area. We also take in data such as their age, date of birth, and any
            immune deficiencies. Finally, WeatherAPI is used to factor in elements
            such as humidity and wind to determine the overall risk factor.
          </p>
        </div>

        <div className="portfolio__project-container-content-image">
          <img src={coronaCast1} alt="CoronaCast screenshot 1" />
          <img src={coronaCast} alt="CoronaCast screenshot 2" />
        </div>
      </div>
    </div>
  </div>
);

export default Project1;
