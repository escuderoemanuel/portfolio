import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar' id='navbar'>
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
  );
};

export default Navbar;
