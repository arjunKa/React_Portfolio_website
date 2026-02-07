import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="portfolio__header section__padding" id="home">
      <div className="portfolio__header-content">
        <p className="portfolio__eyebrow">Software Engineer</p>
        <h1 className="gradient__text">Hi, I'm Arjun</h1>
        <p className="portfolio__header-lead">
          Full-stack engineer with backend and IaC depth. I design clean, layered
          systems and ship microservices in languages such as C#, Java, Python, alongside modern frontend
          work.
        </p>

        <div className="portfolio__header-actions">
          <a
            href="https://github.com/arjunKa/"
            target="_blank"
            rel="noreferrer noopener"
            className="button button--ghost"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arjun-kaura/"
            target="_blank"
            rel="noreferrer noopener"
            className="button"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
