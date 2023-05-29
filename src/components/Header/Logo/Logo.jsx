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
      src='/assets/img/dev/Logo2023.png'
      alt='Developer Logotype'
      onClick={handleScrollToTop}
    />
  );
};

export default Logo;
