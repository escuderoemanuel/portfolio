import React from 'react';
import './Logo.css';

const Logo = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <img
      className='logo'
      id='logo'
      src='https://i.ibb.co/Gxk0ktL/Logo2024.png'
      alt='Developer Logotype'
      onClick={handleScrollToTop}
    />
  );
};

export default Logo;
