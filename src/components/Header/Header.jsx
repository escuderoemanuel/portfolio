import React, { useState } from 'react';
import './Header.css';
import Logo from './Logo/Logo.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Languages from './Languages/Languages';
import Toggle from './Toggle/Toggle';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggleClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  /* Pone Fondo al Scrollear */
  window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  return (
    <div className='header' id='header'>
      <div className='header-principal'>
        <Logo></Logo>
        <Toggle onToggleClick={handleToggleClick} />
      </div>
      <div className='header-secondary'>
        <Navbar isOpen={isNavbarOpen} />
        {/* <Languages></Languages> */}
      </div>
    </div>
  );
};

export default Header;
