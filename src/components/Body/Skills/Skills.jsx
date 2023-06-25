import React from 'react';
import './Skills.css';
import { useTranslation } from 'react-i18next';
import skillsEn from '../../../translations/en/global.json';
import skillsEs from '../../../translations/es/global.json';

const Skills = () => {
  /* i18Next Translation */
  const [t, i18n] = useTranslation('global');

  // Obtener el lenguaje seleccionado
  const currentLanguage = i18n.language;

  // Obtener lista de skills según el idioma actual utilizando destructuring
  const { skillsList } =
    currentLanguage === 'en' ? skillsEn.skills : skillsEs.skills;

  return (
    <section className='skills' id='skills'>
      <div className='Luz4'></div>
      <h3 className='titleSkills' data-aos='fade-left' data-aos-delay='50'>
        {t('skills.title')}
        <span>{t('skills.span-skills')}</span>
      </h3>
      {/* Contenedor de los items skills */}
      <div className='skill-content'>
        <ul>
          {Object.values(skillsList).map((skill, id) => (
            <li key={id}>
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
