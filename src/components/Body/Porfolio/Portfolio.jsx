import React from 'react';
import './Portfolio.css';
import { useTranslation } from 'react-i18next';
import portfolioEn from '../../../translations/en/global.json';
import portfolioEs from '../../../translations/es/global.json';

const Portfolio = () => {
  // i18Next Translation
  const [t, i18n] = useTranslation('global');

  // Obtener el lenguaje seleccionado
  const currentLanguage = i18n.language;

  // Obtener la lista de proyectos según el idioma actual utilizando destructuring
  const { projects } =
    currentLanguage === 'en' ? portfolioEn.portfolio : portfolioEs.portfolio;

  return (
    <section className='portfolio' id='portfolio'>
      <h3 className='titlePortfolio' data-aos='fade-left' data-aos-delay='50'>
        {t('portfolio.title')}
        <span>{t('portfolio.span-portfolio')}</span>
      </h3>
      {/* Contenedor de los elementos del portfolio */}
      <div className='portfolio-content'>
        {/* Utilizando 'id' como key */}
        {Object.values(projects).map((project, id) => (
          <div
            key={id}
            className='cardPortfolio'
            data-aos='flip-left'
            data-aos-delay='350'>
            <img src={project.img} alt={project.title} />
            <div className='cardPortfolioDescription'>
              <h3>{project.title}</h3>
              <h5>{project.type}</h5>
              <p>{project.tools}</p>
            </div>
            <div className='btn-content'>
              <button className='button-card-portfolio'>
                <i className='bx bxl-github bx-sm'></i>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <p>GitHub</p>
                </a>
              </button>
              <button className='button-card-portfolio'>
                <i className='bx bx-link bx-sm'></i>
                <a
                  href={project.deploy}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <p>Deploy</p>
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
