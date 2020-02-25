import React from 'react';
import WorkoutTracker from './portfolio-items/WorkoutTracker';
import PitchingTheory from './portfolio-items/PitchingTheory';
import ContractGenerator from './portfolio-items/ContractGenerator';
import LoaderGallery from './portfolio-items/LoaderGallery';
import HobsonElectric from './portfolio-items/HobsonElectric';
import KnechtInsurance from './portfolio-items/KnechtInsurance';
import BlindsTracker from './portfolio-items/BlindsTracker';
import PortfolioPage from './portfolio-items/PortfolioPage';

const Portfolio = () => {
  return (
    <div className='portfolio-contentContainer'>
        <div>
            <h1 className='section-title'>Portfolio</h1>
            <p className='section-subtitle'>
                Below are some of the projects I've completed. I've included links to the applications themselves, as well as links to the Github repository for each app. Please feel free to explore both the applications and their source code!
            </p>
        </div>
        <WorkoutTracker />
        <hr />
        <PitchingTheory />
        <hr />
        <ContractGenerator />
        <hr />
        <LoaderGallery />
        <hr />
        <HobsonElectric />
        <hr />
        <KnechtInsurance />
        <hr />
        <PortfolioPage />
        <hr />
        <BlindsTracker />
        <hr />
    </div>
  );
}

export default Portfolio;