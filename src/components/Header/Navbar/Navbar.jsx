import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo';
import Languages from '../Languages/Languages';

const Navbar = () => {
  const [isMainMenuVisible, setMainMenuVisible] = useState(false);

  const toggleMainMenu = () => {
    setMainMenuVisible(!isMainMenuVisible);
  };

  return (
    <nav className='main-nav'>
      <Logo></Logo>
      <div>
        <i
          id='toggle-menu'
          className='toggle-menu bx bx-menu-alt-right bx-md'
          onClick={toggleMainMenu}></i>
        <ul
          className={`main-menu ${isMainMenuVisible ? 'main-menu--show' : ''}`}>
          <li className='main-menu-item'>
            <a className='main-menu-link active' href='#home'>
              Home
            </a>
          </li>
          <li className='main-menu-item'>
            <a className='main-menu-link' href='#portfolio'>
              Portfolio
            </a>
          </li>
          <li className='main-menu-item'>
            <a className='main-menu-link' href='#skills'>
              Skills
            </a>
          </li>
          <li className='main-menu-item'>
            <a className='main-menu-link' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <Languages></Languages>
    </nav>
  );
};

export default Navbar;
