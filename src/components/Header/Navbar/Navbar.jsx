import React, { useState } from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  /* i18Next Translation */
  const [t, i18n] = useTranslation('global');

  /* Estado Inicial de la visibilidad de la navbar con UseState */
  const [isNavVisible, setIsNavVisible] = useState(false);
  /* Estado Inicial de la section activa con UseState */
  const [activeSection, setActiveSection] = useState('home');
  /* Estado Inicial de las line de Toggle */
  const [isActive, setIsActive] = useState(false);
  /* Setea el estado de navbar por defecto 'navbar' y dependiendo del estado de visibilidad es 'visible' o 'hidden'  */
  const navbarClass = `navbar ${isNavVisible ? 'visible' : 'hidden'}`;

  /* Manejador de click */
  const handleToggleClick = () => {
    /* Para la visibilidad del menú */
    setIsNavVisible(!isNavVisible);
    /* Para el estado del toggle */
    setIsActive(!isActive);
  };

  /* El click setea el active a la section en la que se clickea y también cambia el valor de visibilidad de la navbar para ocultarla */
  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsNavVisible(false);
  };

  return (
    <>
      <div
        className={`toggle ${isActive ? 'active' : ''} `}
        onClick={handleToggleClick}>
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
      </div>
      <nav className={navbarClass} id='navbar'>
        <a
          className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
          href='#home'
          onClick={() => handleLinkClick('home')}>
          {t('navbar.link-1')}
        </a>
        <a
          className={`navbar-link ${
            activeSection === 'portfolio' ? 'active' : ''
          }`}
          href='#portfolio'
          onClick={() => handleLinkClick('portfolio')}>
          {t('navbar.link-2')}
        </a>
        <a
          className={`navbar-link ${
            activeSection === 'skills' ? 'active' : ''
          }`}
          href='#skills'
          onClick={() => handleLinkClick('skills')}>
          {t('navbar.link-3')}
        </a>
        <a
          className={`navbar-link ${
            activeSection === 'contact' ? 'active' : ''
          }`}
          href='#contact'
          onClick={() => handleLinkClick('contact')}>
          {t('navbar.link-4')}
        </a>
      </nav>
    </>
  );
};

export default Navbar;
