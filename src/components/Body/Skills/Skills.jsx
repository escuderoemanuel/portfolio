import React from 'react';
import './Skills.css';
import { useTranslation } from 'react-i18next';
import skillData from '../../../translations/en/global.json';

const Skills = () => {
  /* i18Next Translation */
  const [t, i18n] = useTranslation('global');
  const skillsList = skillData.skills['skills-list'];

  return (
    <section className='skills' id='skills'>
      <h3 className='titleSkills' data-aos='fade-left' data-aos-delay='50'>
        {t('skills.title')}
        <span>{t('skills.span-skills')}</span>
      </h3>
      {/* Contenedor de los items skills */}
      <div className='skill-content'>
        <ul>
          {Object.values(skillsList).map((skill, index) => (
            <li key={index}>
              <div
                className='skill-card'
                data-aos='zoom-in'
                data-aos-delay='50'>
                <img
                  className='skill-card-img'
                  src={skill.img}
                  alt={skill.title}
                />
                <span>{skill.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Skills;
