import React from 'react';
import Card from '../../components/article/Card';
import projectsData from '../../data/projectsData';
import './projectList.css';

const ProjectList = () => {
  return (
    <div className="portfolio__projectList" id="projects">
      <div className="portfolio__projectList-heading">
        <p className="section__label">Selected work</p>
        <h2 id="projects-title">Projects</h2>
        <p className="section__subtext">
          A quick scan of highlights. Jump into details below for full context.
        </p>
      </div>
      <div className="portfolio__projectList-container">
        <div className="portfolio__projectList-container_groupB">
          {projectsData.map(({ id, cardSkills, cardTitle }) => (
            <Card
              key={id}
              linkToProject={`#${id}`}
              skills={cardSkills}
              text={cardTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
