import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  /* i18Next Translation */
  const [t, i18n] = useTranslation('global');

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <section className='footer'>
      <div className='footerContainer'>
        <p>{t('footer.paragraph')}</p>
        <img
          className='logo'
          src={t('footer.img.url')}
          alt={t('footer.img.alt')}
          onClick={handleScrollToTop}
        />
        <span className='luzFooter'></span>
      </div>
    </section>
  );
};

export default Footer;
