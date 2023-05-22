import React from 'react';
import './DataFile.css';
import Btn from '../../../Global/Btn/Btn';

const DataFile = () => {
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
            &nbsp;&nbsp;&nbsp;&nbsp; <i>const</i>&nbsp; aboutMe = "I am Emanuel,
            a dedicated and enthusiastic developer. I invite you to read my
            CV.";
            <br /> console.log(aboutMe);
            <br /> &#125; <br />
            &nbsp; <b>downloadCV();</b>
          </p>
          <img
            className='cv'
            src='src\assets\img\dev\file2.png'
            alt='Imagen de una mano con un CV'
          />
        </div>

        <div className='footer-card'>
          <Btn className={'primary not-rounded sm'} text={'downloadCV()'}></Btn>
        </div>
      </div>
    </aside>
  );
};

export default DataFile;
