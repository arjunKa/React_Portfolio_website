import React from 'react';
import './project.css';
import projectImage from '../../assets/ProjectImages/CVHelper.png';

import pythonIcon from '../../assets/icons/python.svg';

const Project4 = ({ date, header }) => (
  <div className="portfolio__project-container">
    <div className="portfolio__project-container-content">
      {date ? <p>{date}</p> : null}

      <div className="portfolio__project-container-content-image-and-text">
        <div className="portfolio__project-container-content-text">
          <h3>{header}</h3>

          <div className="portfolio__project-container-content-logos">
            <img src={pythonIcon} alt="Python logo" />
          </div>

          <div className="portfolio__blog-container_article-content_options">
            <a
              href="https://github.com/arjunKa/ResumeHelper"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="button">GitHub</div>
            </a>
            <a
              href="https://akappstorage.blob.core.windows.net/resumehelperapp/1.0/ResumeHelper.msi"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="button">Download</div>
            </a>
          </div>

          <p>
            A Python app with an easy to use GUI that allows you to paste a job
            posting and extract the main points, skills and keywords to
            highlight in your resume. Users can browse for their resume PDF
            file, paste the job posting they want to apply for and see how their
            resume matches up and if there are any gaps or skills not mentioned
            in the resume. It uses natural language processing to preprocess
            the text before it is analyzed. Topic modeling is then used to
            determine main features of the text, as well as extracting the
            languages and tools mentioned in the posting. The app also allows
            your job application files to be consistently labeled based on
            time/date and include details such as the company name so that all
            your files can be easily organized.
          </p>
        </div>

        <div className="portfolio__project-container-content-image">
          <img src={projectImage} alt="Python resume app" />
        </div>
      </div>
    </div>
  </div>
);

export default Project4;
