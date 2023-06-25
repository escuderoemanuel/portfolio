import './Home.css';
import DataFile from './DataFile/DataFile';
import { useTranslation } from 'react-i18next';
const Home = () => {
  /* i18Next Translation */
  const [t, i18n] = useTranslation('global');

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
    <section className='home' id='home' data-aos='zoom-in' data-aos-delay='350'>
      <div className='Luz1a'></div>
      <div className='home-container'>
        <div className='home-content'>
          <div className='title-container'>
            <div className='title-home'>
              <div className='Luz1'></div>
              <p>{t('home.title-home')}</p>
              <h1>Emanuel Escudero</h1>
            </div>
            <div className='text-animate'>
              <h3 className='subtitle-home'>
                FrontEnd<span>&nbsp;Developer</span>!
              </h3>
            </div>
          </div>
          <p className='description'>{t('home.about')}</p>
          <div className='divSocial'>
            <a
              href='https://www.linkedin.com/in/emanuelescudero/'
              target='_blank'
              rel='noopener noreferrer'>
              <i className='iSocial bx bxl-linkedin bx-border-circle bx-sm'></i>
            </a>

            <a
              href='https://github.com/escuderoemanuel'
              target='_blank'
              rel='noopener noreferrer'>
              <i className='iSocial bx bxl-github bx-border-circle bx-sm'></i>
            </a>

            <a
              href='https://wa.me/5492612061160'
              target='_blank'
              rel='noopener noreferrer'>
              <i className='iSocial bx bxl-whatsapp bx-border-circle bx-sm'></i>
            </a>
          </div>
        </div>

        <DataFile></DataFile>
      </div>
    </section>
  );
};

export default Home;
