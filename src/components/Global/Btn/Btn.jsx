import React from 'react';
import './Btn.css';

/* Componente Botón recibe clase, icon derecho, icon izquierdo o texto */
const Btn = ({ className, iconRight, iconLeft, text }) => {
  return (
    <button
      className={
        className
          ? `btn 
        ${className} `
          : 'btn'
      }>
      <div className='btn-content'>
        <i>{iconLeft}</i>
        <p>{text}</p>
        <i>{iconRight}</i>
      </div>
    </button>
  );
};

export default Btn;
