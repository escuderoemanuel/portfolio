import React, { useState } from 'react';
import './Toggle.css';

const Toggle = ({ onToggleClick }) => {
  return (
    <div className='toggle' onClick={onToggleClick}>
      <span className='line'></span>
      <span className='line'></span>
      <span className='line'></span>
    </div>
  );
};

export default Toggle;
