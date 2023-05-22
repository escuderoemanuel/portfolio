import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  /* Estado Inicial de la visibilidad con UseState */
  const [isNavVisible, setIsNavVisible] = useState(false);
  /* Estado Inicial de la section activa con UseState */
  const [activeSection, setActiveSection] = useState('home');

  /* Cambia el estado al hacer click */
  const handleToggleClick = () => {
    setIsNavVisible(!isNavVisible);
  };

  /* El click setea el active a la section en la que se clickea y también cambia el valor de visibilidad de la navbar para ocultarla */
  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsNavVisible(false);
  };

  return (
    <>
      <div className='toggle' onClick={handleToggleClick}>
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
      </div>
      <nav className={`navbar ${isNavVisible ? 'visible' : ''}`} id='navbar'>
        <a
          className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
          href='#home'
          onClick={() => handleLinkClick('home')}>
          Home
        </a>
        <a
          className={`navbar-link ${
            activeSection === 'portfolio' ? 'active' : ''
          }`}
          href='#portfolio'
          onClick={() => handleLinkClick('portfolio')}>
          Portfolio
        </a>
        <a
          className={`navbar-link ${
            activeSection === 'skills' ? 'active' : ''
          }`}
          href='#skills'
          onClick={() => handleLinkClick('skills')}>
          Skills
        </a>
        <a
          className={`navbar-link ${
            activeSection === 'contact' ? 'active' : ''
          }`}
          href='#contact'
          onClick={() => handleLinkClick('contact')}>
          Contact
        </a>
      </nav>
    </>
  );
};

export default Navbar;
