import React from 'react';
import PropTypes from 'prop-types';

const HeaderContent = () => {
  return (
    <div>
        <div className='HeaderContent-header'>
            <div className='HeaderContent-title'>
                Shane Hobson
            </div>
            <div className='HeaderContent-subtitle'>
                I am a front-end web developer and licensed attorney focused on creating digital solutions to legal problems.
            </div>
            <div className='HeaderContent-button'>
                <a href='#portfolio' className='button'>View My Work</a>
            </div>
        </div>
    </div>
  );
}

export default HeaderContent;