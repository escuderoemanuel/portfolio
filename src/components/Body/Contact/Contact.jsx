import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <h3 className='titleContact'>
        Contact{' '}
        <span>
          Me<span>!</span>
        </span>
      </h3>
      <div className='Luz5'></div>
      <div className='contact-content'>
        <form action='#'>
          <div className='input-box'>
            <div className='input-field'>
              <input type='text' placeholder='Full Name' required />
              <span className='focus'></span>
            </div>
            <div className='input-field'>
              <input type='text' placeholder='Email Address' required />
              <span className='focus'></span>
            </div>
            <div className='input-field'>
              <input type='number' placeholder='Mobile Number' required />
              <span className='focus'></span>
            </div>
            <div className='text-area'>
              <textarea
                name=''
                id=''
                cols='34'
                rows='12'
                placeholder='Your Message required'></textarea>
              <span className='focus'></span>
            </div>
            <div className='btn-box'>
              {/* BOTON DESABILITADO */}
              <button disabled='disabled' type='submit' className='btn'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
