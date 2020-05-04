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
                I am a full stack web developer passionate about bringing ideas to life using web technologies. I am proficient in the tools and languages of the modern web, including JavaScript, TypeScript, GoLang, Angular, React, NodeJS, Express, and MongoDB. I am also an Amazon Web Services Certified Cloud Practitioner.
                <br />
            </p>

            <p className='section-subtitle' id='about-subtitle'>
                I am a highly motivated self-starter, and I enjoy tackling challenging problems and overcoming them. I have a proven track record of designing and implementing production applications across several different technology stacks that have been used by businesses and individuals to solve real-world problems.
                <br />
            </p>

            <p className='section-subtitle' id='about-subtitle2'>
                I work fully remotely as a senior full stack web developer for a company based in Seattle, Washington. When not working, I enjoy learning new technologies, building my own applications, and exploring the beautiful Pacific Northwest.
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
                        Angular <br />
                        React<br />
                        Redux<br />
                        NodeJS<br />
                        Express<br />
                        MongoDB<br />
                        JavaScript<br />
                        TypeScript<br />
                        GoLang<br />
                        HTML<br />
                        CSS<br />
                        SASS<br />
                        Material-UI<br />
                        Angular Material<br />
                        Bootstrap<br />
                        D3 <br />
                        Testing (Jasmine, Karma, Newman)<br />
                    </p>
                </div>
                <div>
                    <p className='about-subheading'>
                        Dev Tools:
                    </p>
                    <p className='about-list'>
                        Webpack<br />
                        Babel<br />
                        Gulp<br />
                        Git and Github<br />
                        Command Line/Terminal<br />
                        Heroku<br />
                        Amazon Web Services<br />
                    </p>
                </div>
            </div>
            <div className='about-listContainer'>
                <div>
                    <p className='about-subheading'>
                        Courses and Certificates:
                    </p>
                    <p className='about-list'>
                        AWS Certified Cloud Practitioner<br />
                        Team Treehouse - Front-End Web Development Certificate<br />
                        Udemy - The Complete React Web Developer Course (With Redux)<br />
                        Udemy - The Complete Javascript Course 2018<br />
                        Udemy - The Complete Node.js Developer Course<br />
                        Udemy - Angular7: The Complete Guide<br />
                        Udemy - Master Microservices with Spring Boot and Spring Cloud<br />
                        Udemy - Understanding Typescript<br />
                        Udemy - Bootstrap 4 From Scratch<br />
                        Udemy - Ultimate CSS Grid Course<br />
                        Udemy - Javascript Algorithms and Data Structures Masterclass<br />
                    </p>
                </div>
            </div>
        </div>
        <hr />
    </div>
  );
}

export default About;