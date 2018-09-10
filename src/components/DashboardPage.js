import React from 'react';
import NavBar from './NavBar';
import HeaderContent from './HeaderContent';
import Portfolio from './Portfolio';
import About from './About';

const DashboardPage = () => (
  <div>
    <div className='header'>
      <div className='header_dark-overlay '>
          <div className='header-navBar_container'>
            <NavBar />
          </div>
          <HeaderContent />
      </div>
    </div>
    <div className='portfolio-container' id='portfolio'>
      <div className='portfolio-portfolio'>
        <Portfolio />
      </div>
    </div>
    <div className='about-container' id='about'>
      <div className='about-about'>
        <About />
      </div>
    </div>
  </div>
);

export default DashboardPage;
