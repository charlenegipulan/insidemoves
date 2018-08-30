import React from 'react';
import {Link} from 'react-router-dom';
import './LandingBanner.css';
import CarouselPage from '../Carousel/Carousel';

const LandingBanner = (props) => {
    return(
        <div className='LandingBanner'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="1000">
                        <img className="d-block" src="https://i.imgur.com/aHnFmWh.png" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" src="https://i.imgur.com/Pe3F1Ab.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" src="https://i.imgur.com/11oweLk.png" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" src="https://i.imgur.com/mLfeoDn.png" alt="Fourth slide" />
                    </div>
                </div>
            </div>

            {/* <CarouselPage /> */}


        </div>

    );
};

export default LandingBanner;