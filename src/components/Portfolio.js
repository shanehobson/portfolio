import React from 'react';
import ContractGenerator from './portfolio-items/ContractGenerator';

const Portfolio = () => {
  return (
    <div className='portfolio-contentContainer'>
        <div>
            <h1 className='portfolio-title'>Portfolio</h1>
            <p className='portfolio-subtitle'>
                Below are some of the projects I've completed. I've included links to the apps themselves, as well as links to the Github repository for each app. Please feel free to explore the apps as well as the source code for each app!
            </p>
        </div>
        <ContractGenerator />
    </div>
  );
}

export default Portfolio;