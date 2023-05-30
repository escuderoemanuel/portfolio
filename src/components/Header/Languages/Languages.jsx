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
      <i className='bx bx-world'></i>
      <select
        className='langSelected'
        onChange={(e) => handleChangeLanguage(e.target.value)}>
        <option value='en'>EN</option>
        <option value='es'>ES</option>
      </select>
    </div>
  );
};

export default Languages;
