import React from 'react';
import './LandingBanner.css';

const LandingBanner = (props) => {
    return(
        <div className='LandingBanner'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="1000">
                        <img className="d-block w-100" src="https://i.imgur.com/eo6qWi3.png" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://i.imgur.com/sk8O9lm.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://i.imgur.com/rkO0Nar.png" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://i.imgur.com/mKCNrAq.png" alt="Fourth slide" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LandingBanner;

