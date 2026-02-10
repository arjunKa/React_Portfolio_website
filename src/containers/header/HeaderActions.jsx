import React from 'react';

const HeaderActions = ({ links }) => {
  return (
    <div className="portfolio__header-actions">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          className={link.className}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default HeaderActions;
