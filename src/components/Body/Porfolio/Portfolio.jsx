import React from 'react';
import './Portfolio.css';
import Btn from '../../Global/Btn/Btn';
const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <h3 className='titlePortfolio'>
        Portfolio<span>!</span>
      </h3>
      <div className='portfolio-content'>
        {/* CARD */}
        <div className='cardPortfolio'>
          <img src='https://i.ibb.co/3S3366B/retroplace.jpg' alt='' />
          <div className='cardPortfolioDescription'>
            <h3>Title</h3>
            <h5>Type</h5>
            <p>TOOL | TOOL | TOOL | TOOL | GIT | REACT JS</p>
          </div>
          <div className='btn-content'>
            <button className='button-card-portfolio'>
              <i className='bx bxl-github bx-sm'></i>
              <p>GitHub</p>
            </button>
            <button className='button-card-portfolio'>
              <i className='bx bx-link bx-sm'></i>
              <p>Deploy</p>
            </button>
          </div>
        </div>

        {/* CARD */}
        <div className='cardPortfolio'>
          <img src='https://i.ibb.co/3S3366B/retroplace.jpg' alt='' />
          <div className='cardPortfolioDescription'>
            <h3>Title</h3>
            <h5>Type</h5>
            <p>TOOL | TOOL | TOOL | TOOL | GIT | REACT JS</p>
          </div>
          <div className='btn-content'>
            <button className='button-card-portfolio'>
              <i className='bx bxl-github bx-sm'></i>
              <p>GitHub</p>
            </button>
            <button className='button-card-portfolio'>
              <i className='bx bx-link bx-sm'></i>
              <p>Deploy</p>
            </button>
          </div>
        </div>

        {/* CARD */}
        <div className='cardPortfolio'>
          <img src='https://i.ibb.co/3S3366B/retroplace.jpg' alt='' />
          <div className='cardPortfolioDescription'>
            <h3>Title</h3>
            <h5>Type</h5>
            <p>TOOL | TOOL | TOOL | TOOL | GIT | REACT JS</p>
          </div>
          <div className='btn-content'>
            <button className='button-card-portfolio'>
              <i className='bx bxl-github bx-sm'></i>
              <p>GitHub</p>
            </button>
            <button className='button-card-portfolio'>
              <i className='bx bx-link bx-sm'></i>
              <p>Deploy</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
