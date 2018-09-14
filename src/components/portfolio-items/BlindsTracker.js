import React from 'react';

const BlindsTracker = () => {
  return (
    <div className='portfolio-portfolioItem'>
        <div className='portfolio-portfolioItemImage' id='portfolio-blindsTrackerImage'>
            <a href='https://damp-retreat-69685.herokuapp.com/'><img src='/images/blinds-tracker.png' className='portfolio-screenshot'></img></a>
        </div>
        <div className='portfolio-portfolioItemText' id='portfolio-blindsTrackerText'>
            <h2 className='portfolio-portfolioItemTitle'>Poker Blinds Tracker</h2>
            <p>This web application serves a way to track blinds in a poker game.
            At the beginning of the game, the user has the ability to set (a) how frequently blinds will increase, (b) the initial value of the small and big blinds,
            and (c) the value at which blinds will be capped.
            Once the game starts, the timer functionality lets players know how much time is left until the next blinds increase. When the timer runs out, 
            players are treated to a few seconds of Rick Astley's "Never Gonna Give You Up" before the timer resets itself and the blinds automatically increase.
            Additionally, if there are just two players ("heads up" poker), the alternating arrows next to each player's name allow the players to alternate who pays the big blind each time blinds increase, for fairness purposes.
            I built this app as a comprehensive way to track blinds during friendly poker games at my apartment.
            The app was styled using CSS and the CSS Grid, and the functionality was created using vanilla Javascript.
            </p>
            <div className='portfolio-portfolioButtonContainer'>
                <div className='portfolio-portfolioButton'>
                    <a href='https://damp-retreat-69685.herokuapp.com/' className='button' target='blank'>Explore The App</a>
                </div>
                <div className='portfolio-portfolioButton'>
                    <a href='https://github.com/shanehobson/poker-timer' className='button' target='blank'>View Source Code</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default BlindsTracker;