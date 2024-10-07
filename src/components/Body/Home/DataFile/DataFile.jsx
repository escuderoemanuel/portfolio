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
        href='https://drive.google.com/file/d/1L2_9mtJ6jjfqs2ZkktXevAJBn2Hnmvxt/view?usp=drive_link'
        target='_blank'
        download='EmanuelEscuderoFullStackDeveloperCV.pdf'
        rel='noopener noreferrer'>
        <Btn
          className={'primary not-rounded md btn-content'}
          text={t('home.btn-download')}></Btn>
      </a>
    </aside>
  );
};

export default DataFile;
