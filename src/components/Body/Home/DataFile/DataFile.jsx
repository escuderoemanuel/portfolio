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
            src='https://i.ibb.co/W5KNBXk/file2.png'
            alt='Imagen de una mano con un CV'
          />
        </div>

        <div className='footer-card'>
          <a href='src/assets/files/EmanuelEscuderoFrontendDeveloperCV.pdf'>
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
