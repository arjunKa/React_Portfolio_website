import React from 'react';
import Card from '../../components/article/Card';
import './projectList.css';

const projects = [
  {
    id: 'EcoLearn',
    skills: 'Python, Django, React, Azure',
    text: 'EcoLearn - Carbon Tool',
  },
  {
    id: '3D_GPS',
    skills: 'C#, Unity Game Engine, SketchUp',
    text: '3D GPS Software For EMS vehicles (Intern Project)',
  },
  {
    id: 'CVHelper',
    skills: 'Python, JSON',
    text: 'Resume Helper App',
  },
  {
    id: 'HealthApp',
    skills: 'C++, JSON',
    text: 'C++ Health & Fitness App',
  },
  {
    id: 'CoronaCast',
    skills: 'HTML, JavaScript, API implementation',
    text: 'Covid Risk Assessment Tool',
  },
  {
    id: 'PortfolioSite',
    skills: 'React.js, CSS, HTML, JavaScript',
    text: 'Portfolio Site',
  },
  {
    id: 'DetectiveDom',
    skills: 'Java, JSON + XML',
    text: 'Detective Dom (Game Demo)',
  },
];

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
          {projects.map(({ id, skills, text }) => (
            <Card key={id} linkToProject={`#${id}`} skills={skills} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
