import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__brand">
        <a href="#home" className="nav__logo">
          Arjun Kaura
        </a>
      </div>

      <div className="nav__links">
        <Menu />
      </div>

      <div className="nav__menu">
        {toggleMenu ? (
          <RiCloseLine color="#000000" size={26} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#000000" size={26} onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <div className="nav__dropdown scale-up-center">
            <Menu />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
