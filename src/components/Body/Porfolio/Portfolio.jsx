import React from 'react';
import './Portfolio.css';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  /* i18Next Translation */
  const [t, i18n] = useTranslation('global');

  return (
    <section className='portfolio' id='portfolio'>
      <h3 className='titlePortfolio'>
        {t('portfolio.title')}
        <span>{t('portfolio.span-portfolio')}</span>
      </h3>
      <div className='portfolio-content'>
        {/* CARD 01 */}
        <div className='cardPortfolio'>
          <img
            src={t('portfolio.projects.project-01.img')}
            alt='Project Image'
          />
          <div className='cardPortfolioDescription'>
            <h3>{t('portfolio.projects.project-01.title')}</h3>
            <h5>{t('portfolio.projects.project-01.type')}</h5>
            <p>{t('portfolio.projects.project-01.tools')}</p>
          </div>
          <div className='btn-content'>
            <button className='button-card-portfolio'>
              <i className='bx bxl-github bx-sm'></i>
              <a
                href={t('portfolio.projects.project-01.github')}
                target='_blank'
                rel='noopener noreferrer'>
                <p>GitHub</p>
              </a>
            </button>
            <button className='button-card-portfolio'>
              <i className='bx bx-link bx-sm'></i>
              <a
                href={t('portfolio.projects.project-01.deploy')}
                target='_blank'
                rel='noopener noreferrer'>
                <p>Deploy</p>
              </a>
            </button>
          </div>
        </div>

        {/* CARD 02 */}
        <div className='cardPortfolio'>
          <img
            src={t('portfolio.projects.project-02.img')}
            alt='Project Image'
          />
          <div className='cardPortfolioDescription'>
            <h3>{t('portfolio.projects.project-02.title')}</h3>
            <h5>{t('portfolio.projects.project-02.type')}</h5>
            <p>{t('portfolio.projects.project-02.tools')}</p>
          </div>
          <div className='btn-content'>
            <button className='button-card-portfolio'>
              <i className='bx bxl-github bx-sm'></i>
              <a
                href={t('portfolio.projects.project-02.github')}
                target='_blank'
                rel='noopener noreferrer'>
                <p>GitHub</p>
              </a>
            </button>
            <button className='button-card-portfolio'>
              <i className='bx bx-link bx-sm'></i>
              <a
                href={t('portfolio.projects.project-02.deploy')}
                target='_blank'
                rel='noopener noreferrer'>
                <p>Deploy</p>
              </a>
            </button>
          </div>
        </div>

        {/* CARD 03*/}
        <div className='cardPortfolio'>
          <img
            src={t('portfolio.projects.project-03.img')}
            alt='Project Image'
          />
          <div className='cardPortfolioDescription'>
            <h3>{t('portfolio.projects.project-03.title')}</h3>
            <h5>{t('portfolio.projects.project-03.type')}</h5>
            <p>{t('portfolio.projects.project-03.tools')}</p>
          </div>
          <div className='btn-content'>
            <button className='button-card-portfolio'>
              <i className='bx bxl-github bx-sm'></i>
              <a
                href={t('portfolio.projects.project-03.github')}
                target='_blank'
                rel='noopener noreferrer'>
                <p>GitHub</p>
              </a>
            </button>
            <button className='button-card-portfolio'>
              <i className='bx bx-link bx-sm'></i>
              <a
                href={t('portfolio.projects.project-03.deploy')}
                target='_blank'
                rel='noopener noreferrer'>
                <p>Deploy</p>
              </a>
            </button>
          </div>
        </div>

        {/* CARD 04 */}
        <div className='cardPortfolio'>
          <img
            src={t('portfolio.projects.project-04.img')}
            alt='Project Image'
          />
          <div className='cardPortfolioDescription'>
            <h3>{t('portfolio.projects.project-04.title')}</h3>
            <h5>{t('portfolio.projects.project-04.type')}</h5>
            <p>{t('portfolio.projects.project-04.tools')}</p>
          </div>
          <div className='btn-content'>
            <button className='button-card-portfolio'>
              <i className='bx bxl-github bx-sm'></i>
              <a
                href={t('portfolio.projects.project-04.github')}
                target='_blank'
                rel='noopener noreferrer'>
                <p>GitHub</p>
              </a>
            </button>
            <button className='button-card-portfolio'>
              <i className='bx bx-link bx-sm'></i>
              <a
                href={t('portfolio.projects.project-04.deploy')}
                target='_blank'
                rel='noopener noreferrer'>
                <p>Deploy</p>
              </a>
            </button>
          </div>
        </div>

        {/* CARD 05 */}
        <div className='cardPortfolio'>
          <img
            src={t('portfolio.projects.project-05.img')}
            alt='Project Image'
          />
          <div className='cardPortfolioDescription'>
            <h3>{t('portfolio.projects.project-05.title')}</h3>
            <h5>{t('portfolio.projects.project-05.type')}</h5>
            <p>{t('portfolio.projects.project-05.tools')}</p>
          </div>
          <div className='btn-content'>
            <button className='button-card-portfolio'>
              <i className='bx bxl-github bx-sm'></i>
              <a
                href={t('portfolio.projects.project-05.github')}
                target='_blank'
                rel='noopener noreferrer'>
                <p>GitHub</p>
              </a>
            </button>
            <button className='button-card-portfolio'>
              <i className='bx bx-link bx-sm'></i>
              <a
                href={t('portfolio.projects.project-05.deploy')}
                target='_blank'
                rel='noopener noreferrer'>
                <p>Deploy</p>
              </a>
            </button>
          </div>
        </div>

        {/* CARD 06 */}
        <div className='cardPortfolio'>
          <img
            src={t('portfolio.projects.project-06.img')}
            alt='Project Image'
          />
          <div className='cardPortfolioDescription'>
            <h3>{t('portfolio.projects.project-06.title')}</h3>
            <h5>{t('portfolio.projects.project-06.type')}</h5>
            <p>{t('portfolio.projects.project-06.tools')}</p>
          </div>
          <div className='btn-content'>
            <button className='button-card-portfolio'>
              <i className='bx bxl-github bx-sm'></i>
              <a
                href={t('portfolio.projects.project-06.github')}
                target='_blank'
                rel='noopener noreferrer'>
                <p>GitHub</p>
              </a>
            </button>
            <button className='button-card-portfolio'>
              <i className='bx bx-link bx-sm'></i>
              <a
                href={t('portfolio.projects.project-06.deploy')}
                target='_blank'
                rel='noopener noreferrer'>
                <p>Deploy</p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
