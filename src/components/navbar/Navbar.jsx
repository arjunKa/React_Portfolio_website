import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/icon.jpg";

const Menu = () => (
  <>
    <p>
      <a href="#projects">Projects</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo"></div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>

      {/* <div className='gpt3__navbar-sign'>
        <p> Sign in</p>
        <button type='button'>Sign up</button>
      </div> */}

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="000000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="000000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              {/* <div className='gpt3__navbar-menu_container-links-sign'>
                <p> Sign in</p>
                <button type='button'>Sign up</button>
            </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
