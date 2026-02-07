import React from 'react';
import './project.css';
import projectImage from '../../assets/ProjectImages/3D_GPS.png';
import csharp from '../../assets/icons/csharp.svg';
import unity from '../../assets/icons/unity.svg';

const Project = ({ date, header }) => (
  <div className="portfolio__project-container">
    <div className="portfolio__project-container-content">
      {date ? <p>{date}</p> : null}

      <div className="portfolio__project-container-content-image-and-text">
        <div className="portfolio__project-container-content-text">
          <h3>{header}</h3>

          <div className="portfolio__project-container-content-logos">
            <img src={csharp} alt="C# logo" />
            <img src={unity} alt="Unity logo" />
          </div>

          <div className="portfolio__project-actions">
            <a
              href="https://lassonde.yorku.ca/lassonde-robotics-professor-helps-local-high-school-students"
              target="_blank"
              rel="noreferrer noopener"
              className="button button--ghost"
            >
              Article
            </a>
            <a
              href="https://www.youtube.com/watch?v=h0Q62fK-7ZQ"
              target="_blank"
              rel="noreferrer noopener"
              className="button"
            >
              Demo
            </a>
          </div>

          <p>
            I worked in the VGR (Vision Graphics and Robotics) laboratory at York
            University to develop a prototype of a 3D GPS software. The software
            would be used by Emergency Medical Services to better navigate the
            streets, and also featured a VR component with the ability to use the
            software in VR. Unity game development software and C# programming
            language were used. 3D models were built using SketchUp.
          </p>

          <p>
            <strong>Other Links:</strong>
          </p>
          <ul>
            <li>
              <a
                href="https://vgrserver.eecs.yorku.ca/~jenkin/papers/2017/icinco2017.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                Autonomous Trail Following: Paper on "Autonomous Trail Following"
              </a>
            </li>
            <li>
              <a
                href="https://vgr.lab.yorku.ca/students/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Vision Graphics and Robotics student alumni (includes my name)
              </a>
            </li>
          </ul>
        </div>

        <div className="portfolio__project-container-content-image">
          <img src={projectImage} alt="3D GPS street view" />
        </div>
      </div>
    </div>
  </div>
);

export default Project;
