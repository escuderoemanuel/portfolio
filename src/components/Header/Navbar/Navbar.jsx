import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleToggleClick = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <div className='toggle' onClick={handleToggleClick}>
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
      </div>
      <nav className={`navbar ${isNavVisible ? 'visible' : ''}`} id='navbar'>
        <a className='navbar-link active' href='#home'>
          Home
        </a>
        <a className='navbar-link' href='#portfolio'>
          Portfolio
        </a>
        <a className='navbar-link' href='#skills'>
          Skills
        </a>
        <a className='navbar-link' href='#contact'>
          Contact
        </a>
      </nav>
    </>
  );
};

export default Navbar;
