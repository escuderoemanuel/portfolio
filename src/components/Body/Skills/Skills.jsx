import React from 'react';
import './Skills.css';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  /* i18Next Translation */
  const [t, i18n] = useTranslation('global');

  return (
    <section className='skills' id='skills'>
      <h3 className='titleSkills'>
        {t('skills.title')}
        <span>{t('skills.span-skills')}</span>
      </h3>
      <div className='skills-content'>
        {/* CARD 01 */}
        <div className='skill-card'>
          <img
            className='skill-card-img'
            src={t('skills.skills-list.skill-01.img')}
            alt='skill image'
          />
          <p className='skill-card-p'>
            {t('skills.skills-list.skill-01.title')}
          </p>
        </div>

        {/* CARD 02 */}
        <div className='skill-card'>
          <img
            className='skill-card-img'
            src={t('skills.skills-list.skill-02.img')}
            alt='skill image'
          />
          <p className='skill-card-p'>
            {t('skills.skills-list.skill-02.title')}
          </p>
        </div>
        {/* CARD 03 */}
        <div className='skill-card'>
          <img
            className='skill-card-img'
            src={t('skills.skills-list.skill-03.img')}
            alt='skill image'
          />
          <p className='skill-card-p'>
            {t('skills.skills-list.skill-03.title')}
          </p>
        </div>
        {/* CARD 04 */}
        <div className='skill-card'>
          <img
            className='skill-card-img'
            src={t('skills.skills-list.skill-04.img')}
            alt='skill image'
          />
          <p className='skill-card-p'>
            {t('skills.skills-list.skill-04.title')}
          </p>
        </div>
        {/* CARD 05 */}
        <div className='skill-card'>
          <img
            className='skill-card-img'
            src={t('skills.skills-list.skill-05.img')}
            alt='skill image'
          />
          <p className='skill-card-p'>
            {t('skills.skills-list.skill-05.title')}
          </p>
        </div>
        {/* CARD 06 */}
        <div className='skill-card'>
          <img
            className='skill-card-img'
            src={t('skills.skills-list.skill-06.img')}
            alt='skill image'
          />
          <p className='skill-card-p'>
            {t('skills.skills-list.skill-06.title')}
          </p>
        </div>
        {/* CARD 07 */}
        <div className='skill-card'>
          <img
            className='skill-card-img'
            src={t('skills.skills-list.skill-07.img')}
            alt='skill image'
          />
          <p className='skill-card-p'>
            {t('skills.skills-list.skill-07.title')}
          </p>
        </div>
        {/* CARD 08 */}
        <div className='skill-card'>
          <img
            className='skill-card-img'
            src={t('skills.skills-list.skill-08.img')}
            alt='skill image'
          />
          <p className='skill-card-p'>
            {t('skills.skills-list.skill-08.title')}
          </p>
        </div>
        {/* CARD 09 */}
        <div className='skill-card'>
          <img
            className='skill-card-img'
            src={t('skills.skills-list.skill-09.img')}
            alt='skill image'
          />
          <p className='skill-card-p'>
            {t('skills.skills-list.skill-09.title')}
          </p>
        </div>
        {/* CARD 10 */}
        <div className='skill-card'>
          <img
            className='skill-card-img'
            src={t('skills.skills-list.skill-10.img')}
            alt='skill image'
          />
          <p className='skill-card-p'>
            {t('skills.skills-list.skill-10.title')}
          </p>
        </div>
        {/* CARD 11 */}
        <div className='skill-card'>
          <img
            className='skill-card-img'
            src={t('skills.skills-list.skill-11.img')}
            alt='skill image'
          />
          <p className='skill-card-p'>
            {t('skills.skills-list.skill-11.title')}
          </p>
        </div>
        {/* CARD 12 */}
        <div className='skill-card'>
          <img
            className='skill-card-img'
            src={t('skills.skills-list.skill-12.img')}
            alt='skill image'
          />
          <p className='skill-card-p'>
            {t('skills.skills-list.skill-12.title')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
