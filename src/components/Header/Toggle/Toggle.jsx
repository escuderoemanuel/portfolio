import React, { useState } from 'react';
import './Toggle.css';

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`toggle ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <span className='line'></span>
      <span className='line'></span>
      <span className='line'></span>
    </div>
  );
};

export default Toggle;

/* import React from 'react';
import './Toggle.css';
const Toggle = () => {
  const icons = document.querySelectorAll('.icon');
  icons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      icon.classList.toggle('open');
    });
  });

  return (
    <div className='toggle' id='toggle'>
      <span className='line'></span>
      <span className='line'></span>
      <span className='line'></span>
    </div>
  );
};

export default Toggle;
 */
