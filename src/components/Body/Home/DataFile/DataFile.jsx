import './DataFile.css';
import Btn from '../../../Global/Btn/Btn';
import { useTranslation } from 'react-i18next';

const DataFile = () => {
  /* i18Next Translation */
  const [t, i18n] = useTranslation('global');
  return (
    <aside className='aside'>
      <div className='float-window'>
        <img
          className='programmer'
          src='/assets/img/others/programmer.png'
          alt='Imagen de una mano con un CV'
        />
      </div>
      <a
        href='/assets/files/EmanuelEscuderoFrontendDeveloperCV.pdf'
        target='_blank'
        download='EmanuelEscuderoFrontendDeveloperCV.pdf'
        rel='noopener noreferrer'>
        <Btn
          className={'primary not-rounded md btn-content'}
          text={t('home.btn-download')}></Btn>
      </a>
    </aside>
  );
};

export default DataFile;
