import React from 'react';
import './DataFile.css';
import Btn from '../../../Global/Btn/Btn';
import { useTranslation } from 'react-i18next';

const DataFile = () => {
  /* i18Next Translation */
  const [t, i18n] = useTranslation('global');
  return (
    <aside className='float-window'>
      <div className='card'>
        <div className='header-card'>
          <div className='circle'>
            <i className='bx bxs-circle'></i>
            <i className='bx bxs-circle'></i>
            <i className='bx bxs-circle'></i>
          </div>
          <span className='spanReadme'>./Readme.md</span>
          <div>
            <i className='bx bx-file'></i>
          </div>
        </div>

        <div className='body-card'>
          <p>
            <i>function </i> &nbsp;<b>downloadCV</b> = () =&gt; &#123; <br />
            &nbsp;&nbsp;&nbsp;&nbsp; <i>const</i>&nbsp; aboutMe = "
            {t('home.window-float.paragraph')}";
            <br /> console.log(aboutMe);
            <br /> &#125; <br />
            &nbsp; <b>downloadCV();</b>
          </p>
          <img
            className='cv'
            src='/assets/img/others/docIcon.png'
            alt='Imagen de una mano con un CV'
          />
        </div>

        <div className='footer-card'>
          <a
            href='/assets/files/EmanuelEscuderoFrontendDeveloperCV.pdf'
            target='_blank'
            download='EmanuelEscuderoFrontendDeveloperCV.pdf'
            rel='noopener noreferrer'>
            <Btn
              className={'primary not-rounded sm'}
              text={'downloadCV()'}></Btn>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default DataFile;
