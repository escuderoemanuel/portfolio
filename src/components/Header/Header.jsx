import React from 'react';
import './Header.css';
import Logo from './Logo/Logo.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Languages from './Languages/Languages';
import Toggle from './Toggle/Toggle';

const Header = () => {
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
        <Toggle></Toggle>
      </div>
      <div className='header-secondary'>
        {/* <Navbar></Navbar> */}
        {/* <Languages></Languages> */}
      </div>
    </div>
  );
};

export default Header;
