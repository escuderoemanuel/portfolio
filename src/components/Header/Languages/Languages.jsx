import './Languages.css';
/* Translation */
import { useTranslation } from 'react-i18next';

const Languages = () => {
  const [t, i18n] = useTranslation('global');

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className='languages'>
      <div className='langSelected'>
        <option onClick={() => handleChangeLanguage('en')}>EN</option>
        <option onClick={() => handleChangeLanguage('es')}>ES</option>
      </div>

      <i className='bx bxs-chevron-down'></i>
    </div>
  );
};

export default Languages;
