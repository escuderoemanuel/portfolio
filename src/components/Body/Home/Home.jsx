import React from 'react';
import './Home.css';
import DataFile from './DataFile/DataFile';
const Home = () => {
  document.addEventListener('DOMContentLoaded', function () {
    let homeSection = document.getElementById('home');
    let windowHeight = window.innerHeight;

    function checkVisibility() {
      let sectionTop = homeSection.getBoundingClientRect().top;
      let sectionBottom = homeSection.getBoundingClientRect().bottom;

      if (sectionTop < windowHeight && sectionBottom > 0) {
        homeSection.classList.add('transition-active');
      } else {
        homeSection.classList.remove('transition-active');
      }
    }

    checkVisibility();

    window.addEventListener('scroll', function () {
      checkVisibility();
    });
  });

  return (
    <div className='home' id='home'>
      {/* <div className='home-content'> */}
      <div className='title-container'>
        <div className='title-home'>
          <p>Hi, I´m </p>
          <h1>Emanuel Escudero</h1>
        </div>
        <div className='text-animate'>
          <h3 className='subtitle-home'>FullStack Developer</h3>
        </div>
      </div>
      <p className='description'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        quibusdam, molestiae nostrum ea possimus commodi modi cum nemo dicta id,
        temporibus ex debitis, praesentium cupiditate atque minus.
      </p>
      <div className='divSocial'>
        <i class='iSocial bx bxl-linkedin bx-border-circle bx-md'></i>
        <i class='iSocial bx bxl-github bx-border-circle bx-md'></i>
        <i class='iSocial bx bxl-whatsapp bx-border-circle bx-md'></i>
      </div>
      {/* </div> */}

      <DataFile></DataFile>
    </div>
  );
};

export default Home;
