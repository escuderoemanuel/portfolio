import React from 'react';
import './Portfolio.css';
import Btn from '../../Global/Btn/Btn';
const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <h3 className='titlePortfolio'>Portfolio</h3>
      <div className='portfolio-content'>
        <div className='cardPortfolio'>
          <img src='https://i.ibb.co/3S3366B/retroplace.jpg' alt='' />
          <div className='cardPortfolioDescription'>
            <h3>Title</h3>
            <h5>Type</h5>
            <p>TOOL | TOOL | TOOL | TOOL | TOOL | TOOL JS</p>
          </div>
          <div className='btn-content'>
            <button className='button-card-portfolio'>
              <i class='bx bxl-github bx-sm'></i>
              <p>GitHub</p>
            </button>
            <button className='button-card-portfolio'>
              <i class='bx bx-link bx-sm'></i>
              <p>Deploy</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
