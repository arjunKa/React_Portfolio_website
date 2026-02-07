import React from 'react';
import './projectDetails.css';
import {
  Project,
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
} from '../../components/project';

const projects = [
  { id: 'EcoLearn', Component: Project6, header: 'EcoLearn' },
  {
    id: '3D_GPS',
    Component: Project,
    header: '3D GPS Software for Emergency Responders',
  },
  { id: 'CVHelper', Component: Project4, header: 'Resume Helper' },
  {
    id: 'HealthApp',
    Component: Project5,
    header: 'C++ Health & Fitness App',
  },
  { id: 'CoronaCast', Component: Project1, header: 'CoronaCast' },
  { id: 'PortfolioSite', Component: Project2, header: 'React.js Portfolio Site' },
  {
    id: 'DetectiveDom',
    Component: Project3,
    header: 'Game: Detective Dom (Java)',
  },
];

const ProjectDetails = () => {
  return (
    <div className="portfolio__projectDetails" id="projectDetails">
      <div className="portfolio__projectDetails-heading">
        <p className="section__label">Deep dive</p>
        <h2 id="projects-detail-title">Projects in Detail</h2>
        <p className="section__subtext">
          Outcomes, tech stacks, and decisions behind each build.
        </p>
      </div>

      <div className="portfolio__projectDetails-container_group">
        {projects.map(({ id, Component, header }) => (
          <div id={id} key={id}>
            <Component date="" header={header} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
