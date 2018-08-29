import React from 'react';
import {Link} from 'react-router-dom';
import './LandingBanner.css';


const LandingBanner = (props) => {

    return(
        <div className='LandingBanner'>

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block" src="https://i.imgur.com/eiQAaaj.png" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" src="https://i.imgur.com/1DpkEoZ.png" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" src="https://i.imgur.com/wQWJ0ji.png" alt="Third slide"/>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default LandingBanner;