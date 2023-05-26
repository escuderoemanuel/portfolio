import React from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <section className='contact' id='contact'>
      <h3 className='titleContact'>
        {t('contact.title')}
        <span> {t('contact.span-contact')}</span>
      </h3>
      <div className='Luz5'></div>
      <div className='contact-content'>
        <form action='#'>
          <div className='input-box'>
            <div className='input-field'>
              <input
                type='text'
                placeholder={t('contact.form.fullname')}
                required
              />
              <span className='focus'></span>
            </div>
            <div className='input-field'>
              <input
                type='text'
                placeholder={t('contact.form.email')}
                required
              />
              <span className='focus'></span>
            </div>
            <div className='input-field'>
              <input
                type='number'
                placeholder={t('contact.form.mobile-number')}
                required
              />
              <span className='focus'></span>
            </div>
            <div className='text-area'>
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
              <button disabled='disabled' type='submit' className='btn'>
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
