import React from 'react';
import PropTypes from 'prop-types';

const NavBar = () => {
  return (
    <div>
        <div className='NavBar-navBar'>
            <div className='NavBar-item' id='NavBar-icon'>
            </div>
            <div className='NavBar-item'>
                <p><a href='#portfolio'>Portfolio</a></p>
            </div>
            <div className='NavBar-item'>
                <p><a href='#about'>About</a></p>
            </div>
            <div className='NavBar-item'>
            <p><a href='#contact'>Contact</a></p>
            </div>
        </div>
    </div>
  );
}

export default NavBar;



