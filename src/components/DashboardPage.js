import React from 'react';
import NavBar from './NavBar';
import HeaderContent from './HeaderContent';

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
  </div>
);

export default DashboardPage;
