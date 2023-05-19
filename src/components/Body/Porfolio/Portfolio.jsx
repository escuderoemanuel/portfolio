import React from 'react';
import './Portfolio.css';
const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <h3 className='titlePortfolio'>Portfolio</h3>
      <div className='portfolio-content'>
        {/* <div className='divConLuzPortfolio'></div> */}

        <div className='cardPortfolio'>
          <img src='https://i.ibb.co/3S3366B/retroplace.jpg' alt='' />
          <div className='cardPortfolioContainer'>
            <h3>Title</h3>
            <h5>Type</h5>
            <p>
              Tools Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sint, eligendi. Rem recusandae maiores quibusdam, architecto ipsam
              aut in est voluptatem nisi excepturi corrupti quidem quae
              officiis. Pariatur facere ad eaque?
            </p>
            <div className='btn-box'>
              <a href='#' className='btn textBtn'>
                <i class='bx bxl-github bx-md'></i>GitHub
              </a>
              <a href='#' className='btn textBtn'>
                <i class='bx bx-link bx-md'></i>Deploy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
