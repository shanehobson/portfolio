import React from 'react';

const HobsonElectric = () => {
  return (
    <div className='portfolio-portfolioItem'>
        <div className='portfolio-portfolioItemText'>
            <h2 className='portfolio-portfolioItemTitle'>Hobson Electric, Inc.</h2>
            <p>Drawing on my expertise as a licensed attorney and my experience practicing law,
            I created this web application to help freelance web developers protect themselves in customer/client relationships. 
            The user completes a handful of forms in order to provide the information necessary to generate a contract for web development services,
            and the app generates a legally binding contract in PDF format.   
            This app was built using React, Redux, and Material-UI.          
            </p>
            <div className='portfolio-portfolioButtonContainer'>
                <div className='portfolio-portfolioButton'>
                    <a href='#' className='button'>Explore The App</a>
                </div>
                <div className='portfolio-portfolioButton'>
                    <a href='#' className='button'>View Source Code</a>
                </div>
            </div>
        </div>
        <div className='portfolio-portfolioItemImage'>
            <a href='#'><img src='/images/hobson-electric.png' className='portfolio-screenshot'></img></a>
        </div>
    </div>
  );
}

export default HobsonElectric;