import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="portfolio__footer section__padding" id="contact">
      <div className="portfolio__footer-content">
        <p className="section__label">Contact</p>
        <h2 className="portfolio__footer_header">Let's connect</h2>
        <p className="section__subtext">Open to roles, collaborations, and feedback.</p>

        <div className="portfolio__footer-content-contacts">
          <a className="portfolio__contact-card" href="mailto:arjkaura@outlook.com">
            <p className="portfolio__contact-label">Email</p>
            <p className="portfolio__contact-value">arjkaura@outlook.com</p>
          </a>
          <a
            className="portfolio__contact-card"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/arjunKa"
          >
            <p className="portfolio__contact-label">GitHub</p>
            <p className="portfolio__contact-value">arjunKa</p>
          </a>
          <a
            className="portfolio__contact-card"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/arjun-kaura/"
          >
            <p className="portfolio__contact-label">LinkedIn</p>
            <p className="portfolio__contact-value">arjun-kaura</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
