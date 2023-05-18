import React from 'react';
import './Header.css';
import Logo from './Logo/Logo.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Languages from './Languages/Languages';
const Header = () => {
  window.addEventListener('scroll', function () {
    let header = document.getElementById('header');
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  return (
    <div className='header'>
      <Logo></Logo>
      <Navbar></Navbar>
      <Languages></Languages>
    </div>
  );
};

export default Header;
