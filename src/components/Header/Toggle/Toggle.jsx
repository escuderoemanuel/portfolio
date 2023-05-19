import React, { useState } from 'react';
import './Toggle.css';

const Toggle = () => {
  /* const btn = document.getElementById('toggle');
  const lines = document.getElementsByClassName('line');
  btn.addEventListener('click', () => {
    lines.classList.add('otra');
  }); */

  return (
    <div className='toggle' id='toggle'>
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
