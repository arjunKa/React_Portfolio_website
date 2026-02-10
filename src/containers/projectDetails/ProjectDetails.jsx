import React from 'react';
import './projectDetails.css';
import { Project } from '../../components/project';
import projectsData from '../../data/projectsData';

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
        {projectsData.map((project) => (
          <div id={project.id} key={project.id}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
