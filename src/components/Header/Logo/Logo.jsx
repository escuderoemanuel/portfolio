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
      src='https://i.ibb.co/ZT13Snc/Logo2023.png'
      alt=''
      onClick={handleScrollToTop}
    />
  );
};

export default Logo;
