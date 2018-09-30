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
                I am a front-end web developer who is passionate about designing and building user interfaces. I enjoy bringing ideas to life using web technologies.
                I am proficient in Javascript and have built multiple apps using React and Redux. I have experience styling web pages with plain CSS,
                including CSS Grid and Flexbox, as well as with 
                frameworks such as Bootstrap and component libraries like Material-UI. 
                <br />
                <br />
            </p>
            <p className='section-subtitle' id='about-subtitle2'>
                I am currently based in beautiful Bend, Oregon. Prior to becoming a web developer, I attended law school and worked as an attorney for three years in Indiana. 
                I remain a licensed attorney. 
                I am passionate about using my dual skillset to solve legal problems using technology.
                For example, I have created a <a href='#portfolio' className='about-appLink'>web app</a> that allows freelance developers to generate contracts
                to help protect them in their relationships with customers and clients.
            </p>
            <div className='about-listContainer'>
                <div>
                    <p className='about-subheading'>
                        Languages and Frameworks:
                    </p>
                    <p className='about-list'>
                        HTML<br />
                        CSS/CSS Grid/Flexbox<br />
                        SASS<br />
                        Javascript<br />
                        React<br />
                        Redux<br />
                        Material-UI<br />
                        Bootstrap<br />
                        Node.js<br />
                        Express<br />
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
                        Google Hangouts<br />
                        Trello<br />
                        Amazon Web Services - Route 53<br />
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