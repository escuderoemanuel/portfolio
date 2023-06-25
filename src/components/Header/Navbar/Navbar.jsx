import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import { Link, animateScroll as scroll } from 'react-scroll';

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
    setIsActive(false);
  };

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleWindowsLoad = () => {
      scroll.scrollToTop({ duration: 500 });
    };

    window.addEventListener('load', handleWindowsLoad);

    return () => {
      window.removeEventListener('load', handleWindowsLoad);
    };
  }, []);

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
        <Link
          className={`navbar-link ${
            activeSection === 'home' && !isScrolling ? 'active' : ''
          }`}
          to='home'
          spy={true}
          offset={-20}
          onClick={() => handleLinkClick('home')}>
          {t('navbar.link-1')}
        </Link>
        <Link
          className={`navbar-link ${
            activeSection === 'portfolio' && !isScrolling ? 'active' : ''
          }`}
          to='portfolio'
          spy={true}
          offset={-20}
          onClick={() => handleLinkClick('portfolio')}>
          {t('navbar.link-2')}
        </Link>
        <Link
          className={`navbar-link ${
            activeSection === 'skills' && !isScrolling ? 'active' : ''
          }`}
          to='skills'
          spy={true}
          offset={-20}
          onClick={() => handleLinkClick('skills')}>
          {t('navbar.link-3')}
        </Link>
        <Link
          className={`navbar-link ${
            activeSection === 'contact' && !isScrolling ? 'active' : ''
          }`}
          to='contact'
          spy={true}
          offset={-20}
          onClick={() => handleLinkClick('contact')}>
          {t('navbar.link-4')}
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
