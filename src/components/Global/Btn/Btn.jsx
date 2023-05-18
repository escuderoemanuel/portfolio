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
      {iconLeft} {text}
      {iconRight}
    </button>
  );
};

export default Btn;
