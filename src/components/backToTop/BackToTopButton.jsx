import React, { useEffect, useState } from 'react';
import './backToTopButton.css';

const BackToTopButton = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBackToTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="backToTop_button">
      {backToTop && (
        <button id="scrollUp" onClick={scrollUp} type="button">
          ^
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
