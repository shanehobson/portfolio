import React from 'react';
import PropTypes from 'prop-types';

const NavBar = () => {
  return (
    <div>
        <div className='NavBar-navBar'>
            <div className='NavBar-item' id='NavBar-icon'>
                <img src='/images/icon.png'></img>
            </div>
            <div className='NavBar-item'>
                <p><a href='#portfolio'>Portfolio</a></p>
            </div>
            <div className='NavBar-item'>
                <p><a href='#about'>About Me</a></p>
            </div>
            <div className='NavBar-item'>
                <p>Contact</p>
            </div>
        </div>
    </div>
  );
}

export default NavBar;



