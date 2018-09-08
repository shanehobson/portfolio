import React from 'react';

const LoaderGallery = () => {
  return (
    <div className='portfolio-portfolioItem'>
        <div className='portfolio-portfolioItemImage'>
            <a href='#'><img src='/images/loader-gallery.png' className='portfolio-screenshot'></img></a>
        </div>
        <div className='portfolio-portfolioItemText'>
            <h2 className='portfolio-portfolioItemTitle'>LoaderGallery.com</h2>
            <p>This web application allows web developers to quickly and easily add loading animations to their websites and web apps
            in order to keep users engaged while pages are loading or while the application makes asynchronous requests to API's.
            The user has the ability to select a color from a color picker, or by entering a HEX or RGBA value.
            The application then allows the user to easily copy and paste the necessary HTML and CSS code in order to implement the animation into their application.
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
    </div>
  );
}

export default LoaderGallery;