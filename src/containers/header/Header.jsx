import React from 'react';
import './header.css';
import HeaderActions from './HeaderActions';
import HEADER_CONTENT from './headerContent';

const Header = () => {
  const { role, heading, lead, links } = HEADER_CONTENT;

  return (
    <header className="portfolio__header section__padding" id="home">
      <div className="portfolio__header-content">
        <p className="portfolio__eyebrow">{role}</p>
        <h1 className="gradient__text">{heading}</h1>
        <p className="portfolio__header-lead">{lead}</p>
        <HeaderActions links={links} />
      </div>
    </header>
  );
};

export default Header;
