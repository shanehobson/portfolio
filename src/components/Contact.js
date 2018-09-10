import React from 'react';

const Contact = () => {
  return (
    <div className='contact-contentContainer'>
        <h1 className='section-title'>Get In Touch</h1>
        <p className='contact-subtitle'>
        If you would like to create something great together, please contact me by clicking the button below!
        </p>
        <div className='portfolio-portfolioButtonContainer'>
            <div className='contact-contactButton'>
                <a href='mailto:shanehobson1@gmail.com' className='button'>Connect With Me</a>
            </div>
        </div>
    </div>
  );
}

export default Contact;