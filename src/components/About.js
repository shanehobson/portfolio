import React from 'react';

const About = () => {
  return (
    <div className='about-contentContainer'>
        <div>
            <h1 className='section-title'>About Me</h1>
            <div className='about-imageContainer'>
                <img src='/images/profile-pic3.jpg' className='about-pic'></img>
                <img src='/images/profile-pic2.jpg' className='about-pic' id='about-pic2'></img>
                <img src='/images/profile-pic5.jpg' className='about-pic' id='about-pic3'></img>
            </div>
            <p className='section-subtitle'>
                Below are some of the projects I've completed. I've included links to the apps themselves, as well as links to the Github repository for each app. Please feel free to explore the apps as well as the source code for each app!
            </p>
        </div>
    </div>
  );
}

export default About;