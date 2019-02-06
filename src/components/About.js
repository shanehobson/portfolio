import React from 'react';

const About = () => {
  return (
    <div className='about-contentContainer'>
        <div>
            <h1 className='section-title'>About Me</h1>
            <div className='about-imageContainer'>
                <img src='/images/profile-pic3.jpg' className='about-pic' id='about-pic1'></img>
                <img src='/images/profile-pic2.jpg' className='about-pic' id='about-pic2'></img>
                <img src='/images/profile-pic5.jpg' className='about-pic' id='about-pic3'></img>
            </div>
            <p className='section-subtitle' id='about-subtitle'>
                I am a full-stack web developer who is passionate about bringing ideas to life using web technologies.
                I am proficient in the tools of the modern web, including React, Angular, Node.js, Express, MongoDB, Redux, Material-UI, Angular Material, SASS, and more.
                <br />
                <br />
            </p>
            <p className='section-subtitle' id='about-subtitle2'>
            I work as a front-end web engineer for a startup company in Portland, Oregon. When not working, I enjoy completing freelancing projects for clients, building my own applications, and exploring the beautiful Pacific Northwest.
            </p>
            <p className='section-subtitle' id='about-subtitle3'>
            Prior to becoming a web developer, I attended law school and practiced law for three years as a litigation and trial attorney. I remain a licensed attorney. As a result of this background, I am deeply interested in the intersection between law and technology and I am passionate about using my dual skillset to solve legal problems using technology. 
            </p>
            <div className='about-listContainer'>
                <div>
                    <p className='about-subheading'>
                        Languages and Frameworks:
                    </p>
                    <p className='about-list'>
                        Javascript<br />
                        React<br />
                        Redux<br />
                        Angular <br />
                        HTML<br />
                        CSS/CSS Grid/Flexbox<br />
                        SASS<br />
                        Material-UI<br />
                        Angular Material<br />
                        Bootstrap<br />
                        Node.js<br />
                        Express<br />
                        MongoDB<br />
                    </p>
                </div>
                <div>
                    <p className='about-subheading'>
                        Dev Tools:
                    </p>
                    <p className='about-list'>
                        Visual Studio Code<br />
                        Webpack<br />
                        Babel<br />
                        Gulp<br />
                        Git and Github<br />
                        Command Line/Terminal<br />
                        Heroku<br />
                        Google Domains<br />
                        Chrome Developer Tools<br />
                        Amazon Web Services - S3, Cloudfront, Route 53<br />
                    </p>
                </div>
            </div>
            <div className='about-listContainer'>
                <div>
                    <p className='about-subheading'>
                        Courses and Certificates:
                    </p>
                    <p className='about-list'>
                        Team Treehouse - Front-End Web Development Certificate<br />
                        Udemy - The Complete React Web Developer Course (With Redux)<br />
                        Udemy - The Complete Javascript Course 2018<br />
                        Udemy - The Complete Node.js Developer Course<br />
                        Udemy - Bootstrap 4 From Scratch<br />
                        Udemy - Ultimate CSS Grid Course<br />
                    </p>
                </div>
            </div>
        </div>
        <hr />
    </div>
  );
}

export default About;