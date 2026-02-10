import React from 'react';
import './project.css';

const Project = ({ project }) => {
  const {
    header,
    icons = [],
    actions = [],
    paragraphs = [],
    extraLinksHeading,
    extraLinks = [],
    images = [],
  } = project;
  const hasImages = images.length > 0;

  return (
    <div className="portfolio__project-container">
      <div className="portfolio__project-container-content">
        <div
          className={`portfolio__project-container-content-image-and-text${
            hasImages ? '' : ' portfolio__project-container-content-image-and-text--text-only'
          }`}
        >
          <div className="portfolio__project-container-content-text">
            <h3>{header}</h3>

            {icons.length > 0 ? (
              <div className="portfolio__project-container-content-logos">
                {icons.map(({ src, alt }) => (
                  <img key={alt} src={src} alt={alt} />
                ))}
              </div>
            ) : null}

            {actions.length > 0 ? (
              <div className="portfolio__project-actions">
                {actions.map(({ href, label, ghost }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={ghost ? 'button button--ghost' : 'button'}
                  >
                    {label}
                  </a>
                ))}
              </div>
            ) : null}

            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {extraLinks.length > 0 ? (
              <>
                <p>
                  <strong>{extraLinksHeading || 'Other Links:'}</strong>
                </p>
                <ul>
                  {extraLinks.map(({ href, label }) => (
                    <li key={label}>
                      <a href={href} target="_blank" rel="noreferrer noopener">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>

          {hasImages ? (
            <div className="portfolio__project-container-content-image">
              {images.map(({ src, alt, className }) => (
                <img key={alt} src={src} alt={alt} className={className || ''} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Project;
