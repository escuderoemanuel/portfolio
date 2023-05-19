import React from 'react';
import './DataFile.css';
import Btn from '../../../Global/Btn/Btn';

const DataFile = () => {
  return (
    <aside className='float-window'>
      <div className='card'>
        <div className='header-card'>
          <div className='circle'>
            <i class='bx bxs-circle'></i>
            <i class='bx bxs-circle'></i>
            <i class='bx bxs-circle'></i>
          </div>
          <span className='spanReadme'>./Readme.md</span>
          <div>
            <i class='bx bx-file'></i>
          </div>
        </div>

        <div className='body-card'>
          <p>
            <i>const </i> &nbsp; <b>aboutMe</b> = <i>( ) =&gt; &#123;</i> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Exercitationem, sint eaque
            praesentium, rem ipsa ut corporis at asperiores velit, blanditiis
            aliquam vel et veritatis facilis ducimus libero adipisci! Dolorum,
            aut! Numquam autem, quasi alias quas vitae sequi, blanditiis atque
            delectus assumenda, nisi sint facilis libero. Inventore, libero
            similique molestiae doloremque quae officiis corrupti minima aliquam
            minus, perferendis vel porro ullam? Inventore, libero similique
            molestiae doloremque quae officiis corrupti minima aliquam minus,
            perferendis vel porro ullam?
            <br /> &#125;
          </p>
        </div>

        <div className='footer-card'>
          <Btn
            className={'primary not-rounded lg'}
            text={'View CV'}
            iconRight={<i id='btn-down' class='bx bx-chevrons-down'></i>}>
            {' '}
          </Btn>
        </div>
      </div>
    </aside>
  );
};

export default DataFile;
