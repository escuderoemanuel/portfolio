import React from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <section className='contact' id='contact'>
      <h3 className='titleContact' data-aos='fade-right' data-aos-delay='50'>
        {t('contact.title')}
        <span> {t('contact.span-contact')}</span>
      </h3>
      <div className='Luz5'></div>
      <div className='contact-content'>
        <form action='#'>
          <div className='input-box'>
            <div
              className='input-field'
              data-aos='zoom-in-left'
              data-aos-delay='100'>
              <input
                type='text'
                placeholder={t('contact.form.fullname')}
                required
              />
              <span className='focus'></span>
            </div>
            <div
              className='input-field'
              data-aos='zoom-in-left'
              data-aos-delay='200'>
              <input
                type='text'
                placeholder={t('contact.form.email')}
                required
              />
              <span className='focus'></span>
            </div>
            <div
              className='input-field'
              data-aos='zoom-in-left'
              data-aos-delay='300'>
              <input
                type='number'
                placeholder={t('contact.form.mobile-number')}
                required
              />
              <span className='focus'></span>
            </div>
            <div
              className='text-area'
              data-aos='zoom-in-left'
              data-aos-delay='400'>
              <textarea
                name=''
                id=''
                cols='34'
                rows='8'
                placeholder={t('contact.form.text-area')}
                required></textarea>
              <span className='focus'></span>
            </div>
            <div className='btn-box'>
              {/* BOTON DESABILITADO */}
              <button disabled='' type='submit' className='btn'>
                {t('contact.form.button')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
